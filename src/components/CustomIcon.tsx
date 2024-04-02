export type CustomIconName =
  | 'arc'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'checkmark'
  | 'clipboardPlus'
  | 'clipboardCheckmark'
  | 'close'
  | 'equal'
  | 'exportFile'
  | 'extrude'
  | 'file'
  | 'filePlus'
  | 'folder'
  | 'folderPlus'
  | 'gear'
  | 'horizontal'
  | 'horizontalDash'
  | 'kcl'
  | 'line'
  | 'make-variable'
  | 'move'
  | 'network'
  | 'networkCrossedOut'
  | 'parallel'
  | 'person'
  | 'plus'
  | 'refresh'
  | 'search'
  | 'settings'
  | 'sketch'
  | 'three-dots'
  | 'vertical'

export const CustomIcon = ({
  name,
  ...props
}: {
  name: CustomIconName
} & React.SVGProps<SVGSVGElement>) => {
  switch (name) {
    case 'arc':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 1.5C8.60217 1.5 7.22591 1.84474 5.99313 2.50367C4.76035 3.1626 3.70911 4.1154 2.93251 5.27765C2.15592 6.43991 1.67794 7.77575 1.54093 9.16685C1.40392 10.558 1.6121 11.9614 2.14703 13.2528C2.68195 14.5442 3.52712 15.6838 4.60766 16.5706C5.6882 17.4574 6.97076 18.064 8.34173 18.3367C9.71271 18.6094 11.1298 18.5398 12.4674 18.134C13.8051 17.7282 15.022 16.9988 16.0104 16.0104C16.3068 15.714 16.5796 15.3974 16.8273 15.0634L16.0241 14.4677C15.8055 14.7624 15.5648 15.0418 15.3033 15.3033C14.4312 16.1754 13.3574 16.819 12.1771 17.1771C10.9969 17.5351 9.74651 17.5965 8.53682 17.3559C7.32714 17.1153 6.19547 16.58 5.24205 15.7976C4.28863 15.0151 3.5429 14.0096 3.07091 12.8701C2.59891 11.7306 2.41522 10.4923 2.53612 9.26487C2.65701 8.03743 3.07875 6.85874 3.76398 5.83322C4.44921 4.8077 5.37678 3.967 6.46453 3.38559C7.55227 2.80418 8.76662 2.5 10 2.5C10.3699 2.5 10.7376 2.52734 11.1005 2.58117L11.2472 1.59199C10.836 1.53099 10.4192 1.5 10 1.5ZM13.2067 3.22008C13.5383 3.37691 13.8593 3.5585 14.1668 3.76398C14.4743 3.96946 14.7649 4.19652 15.0367 4.44286L15.7083 3.70191C15.4002 3.42271 15.0709 3.16538 14.7223 2.93251C14.3738 2.69964 14.0101 2.49384 13.6342 2.31609L13.2067 3.22008ZM16.433 6.14423C16.6216 6.45886 16.7876 6.78818 16.9291 7.12987C17.0706 7.47157 17.1861 7.82181 17.2752 8.17765L18.2453 7.93467C18.1443 7.53138 18.0134 7.13444 17.853 6.74719C17.6926 6.35995 17.5044 5.98672 17.2907 5.63012L16.433 6.14423ZM17.491 10.368C17.473 10.7344 17.428 11.1004 17.3559 11.4632C17.2837 11.8259 17.1852 12.1813 17.0616 12.5267L18.0031 12.8636C18.1432 12.4721 18.2549 12.0694 18.3367 11.6583C18.4184 11.2472 18.4694 10.8323 18.4898 10.4171L17.491 10.368Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'arrowDown':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 17.7071L9.64648 17.3535L6.14648 13.8535L6.85359 13.1464L9.50004 15.7929V2.99997H10.5V15.7929L13.1465 13.1464L13.8536 13.8535L10.3536 17.3535L10 17.7071Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'arrowLeft':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.29291 10L2.64646 9.64645L6.14646 6.14645L6.85357 6.85356L4.20712 9.50001L17 9.50001V10.5L4.20712 10.5L6.85357 13.1465L6.14646 13.8536L2.64646 10.3536L2.29291 10Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'arrowRight':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7071 10L17.3536 10.3536L13.8536 13.8536L13.1464 13.1465L15.7929 10.5H3V9.50001H15.7929L13.1464 6.85356L13.8536 6.14645L17.3536 9.64645L17.7071 10Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'arrowUp':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2.29288L10.3536 2.64643L13.8536 6.14643L13.1465 6.85354L10.5 4.20709V17H9.50004V4.20709L6.85359 6.85354L6.14648 6.14643L9.64648 2.64643L10 2.29288Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'checkmark':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.29956 13.5388L13.9537 6L14.7537 6.6L8.75367 14.6L8.00012 14.6536L5 11.6536L5.70709 10.9465L8.29956 13.5388Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'clipboardCheckmark':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 3H7L13 3L13.5 3V3.5V4.00001L15.5 4.00002L16 4.00002V4.50002V10.0351C15.6905 9.85609 15.3548 9.71733 15 9.62602V5.00002L13.5 5.00001V6.50001V7.00001L13 7.00001L7 7.00001L6.5 7.00001V6.50001V5.00001L5 5.00001V16H10.8773C11.2024 16.4055 11.6047 16.7463 12.062 17H4.5H4V16.5V4.50001V4.00001L4.5 4.00001L6.5 4.00001V3.5V3ZM15.938 17C15.9588 16.9885 15.9794 16.9768 16 16.9649V17H15.938ZM7.5 4V4.50001V6.00001L12.5 6.00001V4.50001V4L7.5 4ZM13 9H7V8H13V9ZM15.6855 11.5L13.2101 14.8005L12.2071 13.7975L11.5 14.5046L12.9107 15.9153L13.6642 15.8617L16.4855 12.1L15.6855 11.5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'clipboardPlus':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 3H7L13 3L13.5 3V3.5V4.00001L15.5 4.00002L16 4.00002V4.50002V10.0351C15.6905 9.85609 15.3548 9.71733 15 9.62602V5.00002L13.5 5.00001V6.50001V7.00001L13 7.00001L7 7.00001L6.5 7.00001V6.50001V5.00001L5 5.00001V16H10.8773C11.2024 16.4055 11.6047 16.7463 12.062 17H4.5H4V16.5V4.50001V4.00001L4.5 4.00001L6.5 4.00001V3.5V3ZM15.938 17C15.9588 16.9885 15.9794 16.9768 16 16.9649V17H15.938ZM7.5 4V4.50001V6.00001L12.5 6.00001V4.50001V4L7.5 4ZM13 9H7V8H13V9ZM13.5 11V13H11.5V14H13.5V16H14.5V14H16.5V13H14.5V11H13.5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'close':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.2929 10L6.46448 7.17158L7.17158 6.46448L10 9.2929L12.8284 6.46448L13.5355 7.17158L10.7071 10L13.5355 12.8284L12.8284 13.5355L10 10.7071L7.17158 13.5355L6.46448 12.8284L9.2929 10Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'equal':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 8.78V7H14.52V8.78H5ZM5 13.02V11.24H14.52V13.02H5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'exportFile':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 3H4.5H11H11.2071L11.3536 3.14645L15.8536 7.64646L16 7.7929V8.00001V11.3773C15.6992 11.1362 15.3628 10.9376 15 10.7908V8.50001H11H10.5V8.00001V4H5V16H9.79076C9.93763 16.3628 10.1362 16.6992 10.3773 17H4.5H4V16.5V3.5V3ZM11.5 4.70711L14.2929 7.50001H11.5V4.70711ZM16.3904 14.1877L14.3904 11.6877L13.6096 12.3124L14.9597 14H11V15H14.9597L13.6096 16.6877L14.3904 17.3124L16.3904 14.8124L16.6403 14.5L16.3904 14.1877Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'extrude':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 3L10.3536 3.35355L12.3536 5.35355L11.6465 6.06066L10.5 4.91421V11.5854C11.0826 11.7913 11.5 12.3469 11.5 13C11.5 13.8284 10.8284 14.5 10 14.5C9.17157 14.5 8.5 13.8284 8.5 13C8.5 12.3469 8.91741 11.7913 9.5 11.5854V4.91421L8.35356 6.06066L7.64645 5.35355L9.64645 3.35355L10 3ZM1.95887 12.3282L8 8.63644V9.80838L2.91773 12.9142L10 17.2423L17.0823 12.9142L12 9.80838V8.63644L18.0411 12.3282L19 12.9142L19 14.9683H18V13.5253L10.5 18.1087V19.9683H9.5V18.1087L2 13.5253V14.9683H1L1 12.9142L1.95887 12.3282Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'file':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 3H4.5H11H11.2071L11.3536 3.14645L15.8536 7.64646L16 7.7929V8.00001V16.5V17H15.5H4.5H4V16.5V3.5V3ZM5 4V16H15V8.50001H11H10.5V8.00001V4H5ZM11.5 4.70711L14.2929 7.50001H11.5V4.70711Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'filePlus':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 3H4.5H11H11.2071L11.3536 3.14645L15.8536 7.64646L16 7.7929V8.00001V11.3773C15.6992 11.1362 15.3628 10.9376 15 10.7908V8.50001H11H10.5V8.00001V4H5V16H9.79076C9.93763 16.3628 10.1362 16.6992 10.3773 17H4.5H4V16.5V3.5V3ZM11.5 4.70711L14.2929 7.50001H11.5V4.70711ZM13 12V14H11V15H13V17H14V15H16V14H14V12H13Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'folder':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 3.5H4H7H7.16667L7.3 3.6L9.16667 5H16H16.5V5.5V7.5V16V16.5H16H4H3.5V16V7.5V4V3.5ZM4.5 4.5V7H15.5V6H9H8.83333L8.7 5.9L6.83333 4.5H4.5ZM15.5 8H4.5V15.5H15.5V8Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'folderPlus':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 3.5H4H7H7.16667L7.3 3.6L9.16667 5H16H16.5V5.5V7.5V10.3773C16.1992 10.1362 15.8628 9.93763 15.5 9.79076V8H4.5V15.5H10.5351C10.7529 15.8764 11.0302 16.2141 11.3542 16.5H4H3.5V16V7.5V4V3.5ZM4.5 4.5V7H15.5V6H9H8.83333L8.7 5.9L6.83333 4.5H4.5ZM13.5 11V13H11.5V14H13.5V16H14.5V14H16.5V13H14.5V11H13.5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'gear':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.61477 3.0884L5.87402 4.67077L6.50004 5.75505L5.25004 7.92011H4.0047V11.07H5.25004L6.50004 13.2351L5.86973 14.3268L8.62776 15.9191L9.24503 14.85H11.745L12.3647 15.9234L15.1416 14.3202L14.5151 13.2351L15.7651 11.07H16.9951V7.92011H15.7651L14.5151 5.75505L15.1373 4.67741L12.3778 3.08423L11.7451 4.18012H9.24508L8.61477 3.0884ZM10.4999 13C12.4329 13 13.9999 11.433 13.9999 9.50003C13.9999 7.56703 12.4329 6.00003 10.4999 6.00003C8.56687 6.00003 6.99986 7.56703 6.99986 9.50003C6.99986 11.433 8.56687 13 10.4999 13Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'horizontal':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 9.5H16V11.5H4V9.5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'horizontalDash':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 10.5H6V9.5H14V10.5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'kcl':
      return (
        <svg
          {...props}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40 0H0V40H40V0ZM7.34715 27.2143V15.6577L2.976 15.987V36.7949H7.34715V32.0645L8.00582 31.5256C8.24533 31.326 8.47487 31.1264 8.69442 30.9268L12.1075 36.7949H17.0475C16.1893 35.3978 15.311 33.9906 14.4128 32.5735C13.5346 31.1563 12.6664 29.7392 11.8081 28.3221L15.8499 24.9389C15.4308 24.4399 15.0017 23.931 14.5625 23.412L13.3051 21.8552L7.34715 27.2143ZM22.2581 26.6754C22.8769 25.9169 23.6753 25.5377 24.6533 25.5377C25.272 25.5377 25.8309 25.6175 26.3299 25.7772C26.8289 25.9169 27.4177 26.1465 28.0963 26.4658L29.3238 23.3521C28.5853 22.7933 27.7371 22.4041 26.779 22.1845C25.8409 21.9649 25.0625 21.8552 24.4437 21.8552C22.0885 21.8552 20.2223 22.5537 18.845 23.9509C17.4878 25.3281 16.8092 27.1944 16.8092 29.5496C16.8092 31.9048 17.4878 33.7611 18.845 35.1183C20.2223 36.4756 22.0885 37.1542 24.4437 37.1542C25.0625 37.1542 25.8509 37.0444 26.8089 36.8249C27.767 36.6053 28.6053 36.2161 29.3238 35.6572L28.0963 32.5435C27.4177 32.8629 26.8289 33.0924 26.3299 33.2321C25.8309 33.3718 25.272 33.4417 24.6533 33.4417C23.6753 33.4417 22.8769 33.0924 22.2581 32.3938C21.6594 31.6753 21.36 30.7272 21.36 29.5496C21.36 28.372 21.6594 27.4139 22.2581 26.6754ZM36.2796 36.7949V15.6577L31.9085 15.987V36.7949H36.2796Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'line':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5 6C16.3284 6 17 5.32843 17 4.5C17 3.67157 16.3284 3 15.5 3C14.6716 3 14 3.67157 14 4.5C14 4.73107 14.0522 4.94993 14.1456 5.14543L5.14543 14.1456C4.94993 14.0522 4.73107 14 4.5 14C3.67157 14 3 14.6716 3 15.5C3 16.3284 3.67157 17 4.5 17C5.32843 17 6 16.3284 6 15.5C6 15.2679 5.94729 15.0482 5.8532 14.852L14.852 5.8532C15.0482 5.94729 15.2679 6 15.5 6Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'make-variable':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.07178 6.57735L9.99998 3.1547L15.9282 6.57735V13.4227L9.99998 16.8453L4.07178 13.4227V6.57735ZM9.99998 2L16.9282 6V14L9.99998 18L3.07178 14V6L9.99998 2ZM9.45068 6.854C9.20802 6.798 8.97468 6.78867 8.75068 6.826C8.39602 6.90067 8.06468 7.04533 7.75668 7.26C7.73802 7.26933 7.72402 7.27867 7.71468 7.288C7.45335 7.484 7.24802 7.694 7.09868 7.918C6.96802 8.09533 6.86068 8.282 6.77668 8.478C6.69268 8.65533 6.63668 8.814 6.60868 8.954C6.60868 9.00067 6.62268 9.038 6.65068 9.066L6.69268 9.108H6.95868C7.13602 9.108 7.23402 9.09867 7.25268 9.08C7.28068 9.052 7.30868 8.982 7.33668 8.87C7.45802 8.52467 7.65402 8.212 7.92468 7.932C8.13002 7.72667 8.36802 7.58667 8.63868 7.512C8.83468 7.456 9.02602 7.456 9.21268 7.512C9.40868 7.57733 9.53002 7.68467 9.57668 7.834C9.62335 7.96467 9.61402 8.198 9.54868 8.534L8.77868 11.614C8.65735 11.9593 8.47535 12.216 8.23268 12.384C8.10202 12.4587 7.97602 12.4913 7.85468 12.482C7.68668 12.482 7.53735 12.4307 7.40668 12.328L7.36468 12.286L7.42068 12.272C7.50468 12.244 7.57002 12.216 7.61668 12.188C7.93402 12.02 8.10668 11.7493 8.13468 11.376C8.15335 11.1053 8.05535 10.9187 7.84068 10.816C7.60735 10.6853 7.34135 10.69 7.04268 10.83C6.73468 10.9793 6.54802 11.2547 6.48268 11.656C6.45468 11.8893 6.47335 12.1087 6.53868 12.314C6.56668 12.4073 6.60868 12.4913 6.66468 12.566C6.92602 12.986 7.32268 13.182 7.85468 13.154C8.31202 13.126 8.72268 12.8787 9.08668 12.412L9.12868 12.37L9.21268 12.496C9.44602 12.8133 9.80068 13.0233 10.2767 13.126C10.5474 13.1633 10.79 13.1633 11.0047 13.126C11.6954 12.9767 12.2507 12.58 12.6707 11.936C12.6894 11.9173 12.7034 11.894 12.7127 11.866C12.9553 11.474 13.0767 11.18 13.0767 10.984C13.0767 10.9373 13.0674 10.9047 13.0487 10.886C13.0207 10.8673 12.918 10.858 12.7407 10.858C12.61 10.858 12.526 10.8627 12.4887 10.872C12.442 10.8813 12.4047 10.9327 12.3767 11.026C12.2834 11.3807 12.092 11.7073 11.8027 12.006C11.56 12.23 11.3174 12.3793 11.0747 12.454C11.0094 12.4727 10.9067 12.482 10.7667 12.482C10.6174 12.482 10.5194 12.4727 10.4727 12.454C10.314 12.398 10.1974 12.3 10.1227 12.16C10.0667 12.0573 10.062 11.8613 10.1087 11.572C10.1087 11.5347 10.132 11.4367 10.1787 11.278C10.58 9.542 10.8274 8.55733 10.9207 8.324C11.0887 7.88533 11.3127 7.61467 11.5927 7.512C11.6114 7.50267 11.63 7.498 11.6487 7.498C11.8914 7.43267 12.0967 7.47467 12.2647 7.624L12.3207 7.68L12.2087 7.722C11.8354 7.85267 11.6207 8.128 11.5647 8.548C11.5367 8.76267 11.5927 8.94 11.7327 9.08C11.77 9.11733 11.8167 9.15 11.8727 9.178C12.1714 9.32733 12.4887 9.28067 12.8247 9.038C12.9367 8.954 13.03 8.83267 13.1047 8.674C13.282 8.26333 13.2774 7.87133 13.0907 7.498C12.9787 7.26467 12.7874 7.078 12.5167 6.938C12.162 6.77933 11.8074 6.76533 11.4527 6.896C11.1447 7.01733 10.8787 7.20867 10.6547 7.47L10.5707 7.582C10.552 7.582 10.524 7.554 10.4867 7.498C10.2627 7.17133 9.91735 6.95667 9.45068 6.854Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'move':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2.29289L10.3536 2.64645L12.3536 4.64645L11.6465 5.35355L10.5 4.20711V8V9.50001H12L15.7929 9.50001L14.6465 8.35356L15.3536 7.64645L17.3536 9.64645L17.7071 10L17.3536 10.3536L15.3536 12.3536L14.6465 11.6465L15.7929 10.5H12H10.5V12V15.7929L11.6465 14.6464L12.3536 15.3536L10.3536 17.3536L10 17.7071L9.64645 17.3536L7.64645 15.3536L8.35356 14.6464L9.50001 15.7929V12V10.5H8.00001H4.20712L5.35357 11.6465L4.64646 12.3536L2.64646 10.3536L2.29291 10L2.64646 9.64645L4.64646 7.64645L5.35357 8.35356L4.20712 9.50001H8.00001H9.50001V8V4.20711L8.35356 5.35355L7.64645 4.64645L9.64645 2.64645L10 2.29289Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'network':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 9.64741C17.1925 8.24871 16.0344 7.08457 14.6399 6.26971C13.2455 5.45486 11.6628 5.01742 10.0478 5.00051C8.4328 4.9836 6.84127 5.38779 5.43006 6.17326C4.01884 6.95873 2.83666 8.09837 2 9.47985L2.76881 9.94546C3.52456 8.69756 4.59243 7.66813 5.86718 6.95862C7.14193 6.2491 8.57955 5.88399 10.0384 5.89927C11.4972 5.91455 12.9269 6.30968 14.1865 7.04574C15.4461 7.7818 16.4922 8.83337 17.2216 10.0968L18 9.64741ZM15.2155 11.0953C14.6772 10.1628 13.9051 9.3867 12.9755 8.84347C12.0459 8.30023 10.9907 8.00861 9.91406 7.99733C8.8374 7.98606 7.77638 8.25552 6.83557 8.77917C5.89476 9.30281 5.10664 10.0626 4.54887 10.9836L5.34391 11.4651C5.81802 10.6822 6.48792 10.0364 7.28761 9.59132C8.0873 9.14622 8.98916 8.91718 9.90432 8.92676C10.8195 8.93635 11.7164 9.18423 12.5065 9.64598C13.2967 10.1077 13.953 10.7674 14.4106 11.56L15.2155 11.0953ZM10 14C10.8284 14 11.5 13.3284 11.5 12.5C11.5 11.6716 10.8284 11 10 11C9.17157 11 8.5 11.6716 8.5 12.5C8.5 13.3284 9.17157 14 10 14Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'networkCrossedOut':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.35352 5.39647L14.253 15.296L14.9601 14.5889L5.06062 4.68936L4.35352 5.39647ZM12.5065 9.64599C11.9609 9.32713 11.3643 9.11025 10.746 9.00341L9.74058 7.99796C9.79835 7.99694 9.85618 7.99674 9.91406 7.99735C10.9907 8.00862 12.0459 8.30025 12.9755 8.84348C13.9051 9.38672 14.6772 10.1628 15.2155 11.0953L14.4106 11.56C13.953 10.7674 13.2967 10.1077 12.5065 9.64599ZM6.48788 8.98789L7.16295 9.66297C6.41824 10.1045 5.79317 10.7233 5.34391 11.4651L4.54887 10.9836C5.03646 10.1785 5.70009 9.49656 6.48788 8.98789ZM10.0384 5.89928C9.3134 5.89169 8.59366 5.97804 7.89655 6.15392L7.16867 5.42605C8.09637 5.13507 9.06776 4.99026 10.0478 5.00052C11.6628 5.01744 13.2455 5.45488 14.6399 6.26973C16.0344 7.08458 17.1925 8.24872 18 9.64742L17.2216 10.0968C16.4922 8.83338 15.4461 7.78181 14.1865 7.04575C12.9269 6.3097 11.4972 5.91456 10.0384 5.89928ZM5.00782 7.50783L4.36522 6.86524C3.42033 7.57557 2.61639 8.46208 2 9.47986L2.76881 9.94547C3.34775 8.98952 4.10986 8.16177 5.00782 7.50783ZM10 14C10.4142 14 10.7892 13.8321 11.0607 13.5607L8.93934 11.4394C8.66789 11.7108 8.5 12.0858 8.5 12.5C8.5 13.3284 9.17157 14 10 14Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'parallel':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 16V4H6V16H8ZM14 16V4H12V16H14Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'person':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6C12 7.10457 11.1046 8 10 8C8.89543 8 8 7.10457 8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6ZM13 6C13 7.65685 11.6569 9 10 9C8.34315 9 7 7.65685 7 6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6ZM5 12V11L9 10H11L15 11V12C15 14.7614 12.7614 17 10 17C7.23858 17 5 14.7614 5 12ZM6 11.7808L9.12311 11H10.8769L14 11.7808V12C14 14.2091 12.2091 16 10 16C7.79086 16 6 14.2091 6 12V11.7808Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'plus':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 9.5V5.5H10.5V9.5H14.5V10.5H10.5V14.5H9.5V10.5H5.5V9.5H9.5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'refresh':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.93434 4.43959L9.4014 4.26111L14.0251 2.49432L14.382 3.42845L11.5647 4.50499L10.5648 4.51221C10.8323 4.53935 11.0173 4.58539 11.2161 4.63484C11.2179 4.63528 11.2197 4.63572 11.2214 4.63616L11.2195 4.6369C11.8713 4.78513 12.4941 5.05172 13.0556 5.42692C13.9601 6.03127 14.6651 6.89025 15.0813 7.89524C15.4976 8.90024 15.6065 10.0061 15.3943 11.073C15.1821 12.1399 14.6583 13.1199 13.8891 13.8891C13.1199 14.6583 12.1399 15.1821 11.073 15.3943C10.0061 15.6065 8.90023 15.4976 7.89524 15.0813C6.89025 14.6651 6.03126 13.9601 5.42692 13.0556C4.82257 12.1512 4.5 11.0878 4.5 10H5.5C5.5 10.89 5.76392 11.76 6.25839 12.5001C6.75285 13.2401 7.45566 13.8169 8.27792 14.1575C9.10019 14.4981 10.005 14.5872 10.8779 14.4135C11.7508 14.2399 12.5526 13.8113 13.182 13.182C13.8113 12.5526 14.2399 11.7508 14.4135 10.8779C14.5872 10.005 14.4981 9.10019 14.1575 8.27793C13.8169 7.45566 13.2401 6.75286 12.5001 6.25839C11.8763 5.84159 11.1601 5.5886 10.4175 5.51941L11.8137 9.17339L10.8796 9.53033L9.11281 4.90665L8.93434 4.43959Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'search':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.016 9.00482C14.016 10.662 12.6731 12.0048 11.0172 12.0048C9.3613 12.0048 8.01841 10.662 8.01841 9.00482C8.01841 7.34768 9.3613 6.00482 11.0172 6.00482C12.6731 6.00482 14.016 7.34768 14.016 9.00482ZM15.016 9.00482C15.016 11.214 13.2257 13.0048 11.0172 13.0048C10.082 13.0048 9.22178 12.6837 8.54074 12.1456L5.6912 14.9952L4.98409 14.2881L7.83921 11.433C7.32431 10.7597 7.01841 9.91799 7.01841 9.00482C7.01841 6.79568 8.80873 5.00482 11.0172 5.00482C13.2257 5.00482 15.016 6.79568 15.016 9.00482Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'settings':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 5.5C8 5.77614 7.77614 6 7.5 6C7.22386 6 7 5.77614 7 5.5C7 5.22386 7.22386 5 7.5 5C7.77614 5 8 5.22386 8 5.5ZM6.08535 6C6.29127 6.5826 6.84689 7 7.5 7C8.32843 7 9 6.32843 9 5.5C9 4.67157 8.32843 4 7.5 4C6.84689 4 6.29127 4.4174 6.08535 5H5V6H6.08535ZM15 6H9.94999C9.98278 5.83844 10 5.67123 10 5.5C10 5.32877 9.98278 5.16155 9.94999 5H15V6ZM11 14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5C10 14.2239 10.2239 14 10.5 14C10.7761 14 11 14.2239 11 14.5ZM9.08535 15C9.29127 15.5826 9.84689 16 10.5 16C11.3284 16 12 15.3284 12 14.5C12 13.6716 11.3284 13 10.5 13C9.84689 13 9.29127 13.4174 9.08535 14H5V15H9.08535ZM15 15H12.95C12.9828 14.8384 13 14.6712 13 14.5C13 14.3288 12.9828 14.1616 12.95 14H15V15ZM11.5 10.5C11.7761 10.5 12 10.2761 12 10C12 9.72386 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.72386 11 10C11 10.2761 11.2239 10.5 11.5 10.5ZM11.5 8.5C12.1531 8.5 12.7087 8.9174 12.9146 9.5H15V10.5H12.9146C12.7087 11.0826 12.1531 11.5 11.5 11.5C10.6716 11.5 10 10.8284 10 10C10 9.17157 10.6716 8.5 11.5 8.5ZM9.05001 10.5C9.01722 10.3384 9 10.1712 9 10C9 9.82877 9.01722 9.66155 9.05001 9.5H5V10.5H9.05001Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'sketch':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8037 13.4035L15.5509 14.1635L16.3682 16.8386L13.5521 16.1346L12.8186 15.3885L14.8037 13.4035ZM14.1025 12.6903L12.1175 14.6754L3.48609 5.89624C2.94588 5.34678 2.94963 4.46456 3.49448 3.91971C4.04591 3.36828 4.94112 3.37208 5.48786 3.92817L14.1025 12.6903ZM6.20094 3.22709L16.4357 13.6371L17.5003 17.1216L17.8412 18.2376L16.7091 17.9546L13.0364 17.0364L2.77301 6.59732C1.84793 5.6564 1.85434 4.14564 2.78737 3.2126C3.73167 2.2683 5.26468 2.27481 6.20094 3.22709Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'three-dots':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 10C6.5 10.8284 5.82843 11.5 5 11.5C4.17157 11.5 3.5 10.8284 3.5 10C3.5 9.17157 4.17157 8.5 5 8.5C5.82843 8.5 6.5 9.17157 6.5 10ZM11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10ZM15 11.5C15.8284 11.5 16.5 10.8284 16.5 10C16.5 9.17157 15.8284 8.5 15 8.5C14.1716 8.5 13.5 9.17157 13.5 10C13.5 10.8284 14.1716 11.5 15 11.5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'vertical':
      return (
        <svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 4V16H9V4H11Z"
            fill="currentColor"
          />
        </svg>
      )
  }
}
