import { OnboardingButtons, useDismiss } from '.'
import { useEffect } from 'react'
import { bracket } from 'lib/exampleKcl'
import { codeManager, kclManager } from 'lib/singletons'
import { useModelingContext } from 'hooks/useModelingContext'
import { APP_NAME } from 'lib/constants'
import { onboardingPaths } from './paths'

export default function FutureWork() {
  const { send } = useModelingContext()
  const dismiss = useDismiss()

  useEffect(() => {
    // We do want to update both the state and editor here.
    codeManager.updateCodeEditor(bracket)
    if (kclManager.engineCommandManager.engineConnection?.isReady()) {
      // If the engine is ready, promptly execute the loaded code
      kclManager.executeCode(true)
    }

    send({ type: 'Cancel' }) // in case the user hit 'Next' while still in sketch mode
  }, [send])

  return (
    <div className="fixed grid justify-center items-center inset-0 bg-chalkboard-100/50 z-50">
      <div className="max-w-full xl:max-w-2xl border border-chalkboard-50 dark:border-chalkboard-80 shadow-lg flex flex-col justify-center bg-chalkboard-10 dark:bg-chalkboard-90 p-8 rounded">
        <h1 className="text-2xl font-bold">Future Work</h1>
        <p className="my-4">
          We have curves, cuts, and many more CAD features coming soon. We want
          your feedback on this user interface, and we want to know what
          features you want to see next. Please message us in{' '}
          <a
            href="https://discord.gg/JQEpHR7Nt2"
            target="_blank"
            rel="noreferrer noopener"
          >
            our Discord server
          </a>
          and{' '}
          <a
            href="https://github.com/KittyCAD/modeling-app/issues/new/choose"
            rel="noreferrer noopener"
            target="_blank"
          >
            open issues on GitHub
          </a>
          .
        </p>
        <p className="my-4">
          If you make anything with the app we'd love to see it, feel free to{' '}
          <a
            href="https://twitter.com/zoodotdev"
            target="_blank"
            rel="noreferrer noopener"
          >
            tag us on X
          </a>
          ! Thank you for taking time to try out {APP_NAME}, and build the
          future of hardware design with us.
        </p>
        <p className="my-4">💚 The Zoo Team</p>
        <OnboardingButtons
          currentSlug={onboardingPaths.FUTURE_WORK}
          className="mt-6"
          dismiss={dismiss}
          next={dismiss}
          nextText="Finish"
        />
      </div>
    </div>
  )
}
