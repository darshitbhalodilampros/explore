import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [Gas, AnimatedGas] = createIcon({
  name: 'Gas',
  getIcon: (props) => (
    <Svg fill="none" viewBox="0 0 17 16" {...props}>
      <Path
        clipRule="evenodd"
        d="M10.7052 0.185606C10.971 -0.0692459 11.393 -0.0604243 11.6478 0.205309L14.4793 3.15764C14.6618 3.31659 14.8153 3.50812 14.9306 3.72319C15.0654 3.95457 15.1667 4.23222 15.1667 4.55141V11.4675C15.1667 12.499 14.3304 13.3334 13.3 13.3334C12.2691 13.3334 11.4333 12.4977 11.4333 11.4668V9.93337C11.4333 9.56518 11.1349 9.2667 10.7667 9.2667H10.5V14.0001C10.5 14.0461 10.4977 14.0916 10.4931 14.1364C10.4677 14.3868 10.373 14.6167 10.2285 14.8066C9.98494 15.1268 9.59994 15.3334 9.16667 15.3334H3.83333C3.37309 15.3334 2.96732 15.1002 2.72771 14.7456C2.58395 14.5328 2.5 14.2762 2.5 14.0001V2.66669C2.5 1.56212 3.39543 0.666694 4.5 0.666694H8.5C9.60457 0.666694 10.5 1.56212 10.5 2.66669V7.93337H10.7667C11.8712 7.93337 12.7667 8.8288 12.7667 9.93337V11.4668C12.7667 11.7613 13.0054 12.0001 13.3 12.0001C13.5951 12.0001 13.8333 11.7615 13.8333 11.4675V6.55289C13.6248 6.62659 13.4004 6.66669 13.1667 6.66669C12.0621 6.66669 11.1667 5.77126 11.1667 4.66669C11.1667 3.8591 11.6453 3.1633 12.3344 2.84754L10.6855 1.12821C10.4307 0.862475 10.4395 0.440457 10.7052 0.185606ZM13.5732 4.1383C13.4607 4.05159 13.3197 4.00003 13.1667 4.00003C12.7985 4.00003 12.5 4.2985 12.5 4.66669C12.5 5.03488 12.7985 5.33336 13.1667 5.33336C13.5349 5.33336 13.8333 5.03488 13.8333 4.66669C13.8333 4.56065 13.8086 4.46039 13.7645 4.37138C13.7202 4.30119 13.6566 4.22382 13.5732 4.1383ZM4.5 9.33334C4.13181 9.33334 3.83333 9.63182 3.83333 10C3.83333 10.3682 4.13181 10.6667 4.5 10.6667H8.5C8.86819 10.6667 9.16667 10.3682 9.16667 10C9.16667 9.63182 8.86819 9.33334 8.5 9.33334H4.5ZM4.5 12C4.13181 12 3.83333 12.2985 3.83333 12.6667C3.83333 13.0349 4.13181 13.3333 4.5 13.3333H8.5C8.86819 13.3333 9.16667 13.0349 9.16667 12.6667C9.16667 12.2985 8.86819 12 8.5 12H4.5Z"
        fill={'currentColor' ?? '#7D7D7D'}
        fillRule="evenodd"
      />
    </Svg>
  ),
  defaultFill: '#7D7D7D',
})
