import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsMovieChecked = (
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
    <mask
      id="prefix__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#prefix__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 8H6L4 4q-.824 0-1.412.588A1.93 1.93 0 0 0 2 6v12q0 .824.587 1.413Q3.176 20 4 20h16q.824 0 1.413-.587Q22 18.825 22 18V8.5l-2 2V18h-7.791a2.13 2.13 0 0 1-1.418 0H4v-8h1.5a2.12 2.12 0 0 1 3 0h6l2-2H16l-2-4h-2l2 4h-3L9 4H7zm12.413-3.412q.37.37.507.836A2.12 2.12 0 0 0 19 5.5l-.833.833L17 4h3q.824 0 1.413.588M19.854 6.33l-8.247 8.247-3.795-3.846a.95.95 0 0 0-.693-.292.95.95 0 0 0-.694.292 1 1 0 0 0-.304.694.9.9 0 0 0 .28.693l4.525 4.552a.93.93 0 0 0 .681.291q.39 0 .681-.291l8.929-8.953a.95.95 0 0 0 .292-.693.95.95 0 0 0-.292-.694.93.93 0 0 0-.682-.292.93.93 0 0 0-.68.292"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsMovieChecked);
export default ForwardRef;
