import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsBookSetting = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    ref={ref}
    {...props}
  >
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M6 6a1 1 0 0 1 1-1h1v9.667H6.667A2.8 2.8 0 0 0 6 14.75zm5.908 8.667H10V5h7v6.4c.705 0 1.379.13 2 .368V3H7a3 3 0 0 0-3 3v11q0 .085.005.171A2.667 2.667 0 0 0 6.667 20h5.604a5.6 5.6 0 0 1-.782-2H6.667a.667.667 0 0 1-.46-1.15l.01-.009a.67.67 0 0 1 .45-.174h4.743c.041-.71.216-1.386.498-2" />
      <path d="M17 12a1 1 0 0 0-1 1v.126c-.367.095-.714.24-1.032.428l-.09-.09a1 1 0 1 0-1.414 1.415l.09.09A4 4 0 0 0 13.126 16H13a1 1 0 1 0 0 2h.126c.095.367.24.714.428 1.032l-.09.09a1 1 0 1 0 1.415 1.413l.089-.089c.318.188.665.333 1.032.428V21a1 1 0 1 0 2 0v-.126c.367-.095.714-.24 1.032-.428l.09.09a1 1 0 1 0 1.413-1.415l-.089-.089c.188-.318.333-.665.428-1.032H21a1 1 0 1 0 0-2h-.126a4 4 0 0 0-.428-1.032l.09-.09a1 1 0 1 0-1.415-1.414l-.089.09A4 4 0 0 0 18 13.126V13a1 1 0 0 0-1-1m0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsBookSetting);
export default ForwardRef;
