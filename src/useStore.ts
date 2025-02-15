import create from 'zustand'
import { persist } from 'zustand/middleware'
import { addLineHighlight, EditorView } from './editor/highlightextension'
import { Program, abstractSyntaxTree } from './lang/abstractSyntaxTree'
import { getNodeFromPath } from './lang/queryAst'
import {
  ProgramMemory,
  Position,
  PathToNode,
  Rotation,
  SourceRange,
} from './lang/executor'
import { recast } from './lang/recast'
import { asyncLexer } from './lang/tokeniser'
import { EditorSelection } from '@codemirror/state'

export type Selection = {
  type: 'default' | 'line-end' | 'line-mid'
  range: SourceRange
}
export type Selections = {
  otherSelections: ('y-axis' | 'x-axis' | 'z-axis')[]
  codeBasedSelections: Selection[]
}
export type TooTip =
  | 'lineTo'
  | 'line'
  | 'angledLine'
  | 'angledLineOfXLength'
  | 'angledLineOfYLength'
  | 'angledLineToX'
  | 'angledLineToY'
  | 'xLine'
  | 'yLine'
  | 'xLineTo'
  | 'yLineTo'
  | 'angledLineThatIntersects'

export const toolTips: TooTip[] = [
  'lineTo',
  'line',
  'angledLine',
  'angledLineOfXLength',
  'angledLineOfYLength',
  'angledLineToX',
  'angledLineToY',
  'xLine',
  'yLine',
  'xLineTo',
  'yLineTo',
  'angledLineThatIntersects',
]

export type GuiModes =
  | {
      mode: 'default'
    }
  | {
      mode: 'sketch'
      sketchMode: TooTip
      isTooltip: true
      rotation: Rotation
      position: Position
      id?: string
      pathToNode: PathToNode
    }
  | {
      mode: 'sketch'
      sketchMode: 'sketchEdit'
      rotation: Rotation
      position: Position
      pathToNode: PathToNode
    }
  | {
      mode: 'sketch'
      sketchMode: 'selectFace'
    }
  | {
      mode: 'canEditSketch'
      pathToNode: PathToNode
      rotation: Rotation
      position: Position
    }
  | {
      mode: 'canEditExtrude'
      pathToNode: PathToNode
      rotation: Rotation
      position: Position
    }

export interface StoreState {
  editorView: EditorView | null
  setEditorView: (editorView: EditorView) => void
  highlightRange: [number, number]
  setHighlightRange: (range: Selection['range']) => void
  setCursor: (selections: Selections) => void
  selectionRanges: Selections
  selectionRangeTypeMap: { [key: number]: Selection['type'] }
  setSelectionRanges: (range: Selections) => void
  guiMode: GuiModes
  lastGuiMode: GuiModes
  setGuiMode: (guiMode: GuiModes) => void
  logs: string[]
  addLog: (log: string) => void
  resetLogs: () => void
  ast: Program | null
  setAst: (ast: Program | null) => void
  updateAst: (
    ast: Program,
    optionalParams?: {
      focusPath?: PathToNode
      callBack?: (ast: Program) => void
    }
  ) => void
  updateAstAsync: (ast: Program, focusPath?: PathToNode) => void
  code: string
  setCode: (code: string) => void
  formatCode: () => void
  errorState: {
    isError: boolean
    error: string
  }
  setError: (error?: string) => void
  programMemory: ProgramMemory
  setProgramMemory: (programMemory: ProgramMemory) => void
  isShiftDown: boolean
  setIsShiftDown: (isShiftDown: boolean) => void
}

let pendingAstUpdates: number[] = []

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      editorView: null,
      setEditorView: (editorView) => {
        set({ editorView })
      },
      highlightRange: [0, 0],
      setHighlightRange: (selection) => {
        set({ highlightRange: selection })
        const editorView = get().editorView
        if (editorView) {
          editorView.dispatch({ effects: addLineHighlight.of(selection) })
        }
      },
      setCursor: (selections) => {
        const { editorView } = get()
        if (!editorView) return
        const ranges: ReturnType<typeof EditorSelection.cursor>[] = []
        const selectionRangeTypeMap: { [key: number]: Selection['type'] } = {}
        set({ selectionRangeTypeMap })
        selections.codeBasedSelections.forEach(({ range, type }) => {
          ranges.push(EditorSelection.cursor(range[1]))
          selectionRangeTypeMap[range[1]] = type
        })
        setTimeout(() => {
          editorView.dispatch({
            selection: EditorSelection.create(
              ranges,
              selections.codeBasedSelections.length - 1
            ),
          })
        })
      },
      selectionRangeTypeMap: {},
      selectionRanges: {
        otherSelections: [],
        codeBasedSelections: [],
      },
      setSelectionRanges: (selectionRanges) =>
        set({ selectionRanges, selectionRangeTypeMap: {} }),
      guiMode: { mode: 'default' },
      lastGuiMode: { mode: 'default' },
      setGuiMode: (guiMode) => {
        set({ guiMode })
      },
      logs: [],
      addLog: (log) => {
        if (Array.isArray(log)) {
          const cleanLog: any = log.map(({ __geoMeta, ...rest }) => rest)
          set((state) => ({ logs: [...state.logs, cleanLog] }))
        } else {
          set((state) => ({ logs: [...state.logs, log] }))
        }
      },
      resetLogs: () => {
        set({ logs: [] })
      },
      ast: null,
      setAst: (ast) => {
        set({ ast })
      },
      updateAst: async (ast, { focusPath, callBack = () => {} } = {}) => {
        const newCode = recast(ast)
        const astWithUpdatedSource = abstractSyntaxTree(
          await asyncLexer(newCode)
        )
        callBack(astWithUpdatedSource)

        set({ ast: astWithUpdatedSource, code: newCode })
        if (focusPath) {
          const { node } = getNodeFromPath<any>(astWithUpdatedSource, focusPath)
          const { start, end } = node
          if (!start || !end) return
          setTimeout(() => {
            get().setCursor({
              codeBasedSelections: [
                {
                  type: 'default',
                  range: [start, end],
                },
              ],
              otherSelections: [],
            })
          })
        }
      },
      updateAstAsync: async (ast, focusPath) => {
        // clear any pending updates
        pendingAstUpdates.forEach((id) => clearTimeout(id))
        pendingAstUpdates = []
        // setup a new update
        pendingAstUpdates.push(
          setTimeout(() => {
            get().updateAst(ast, { focusPath })
          }, 100) as unknown as number
        )
      },
      code: '',
      setCode: (code) => {
        set({ code })
      },
      formatCode: async () => {
        const code = get().code
        const ast = abstractSyntaxTree(await asyncLexer(code))
        const newCode = recast(ast)
        set({ code: newCode, ast })
      },
      errorState: {
        isError: false,
        error: '',
      },
      setError: (error = '') => {
        set({ errorState: { isError: !!error, error } })
      },
      programMemory: { root: {}, _sketch: [] },
      setProgramMemory: (programMemory) => set({ programMemory }),
      isShiftDown: false,
      setIsShiftDown: (isShiftDown) => set({ isShiftDown }),
    }),
    {
      name: 'store',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => ['code'].includes(key))
        ),
    }
  )
)
