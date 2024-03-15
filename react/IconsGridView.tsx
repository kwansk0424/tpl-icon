import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsGridView = (
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
        d="M5 11q-.824 0-1.412-.588A1.93 1.93 0 0 1 3 9V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h4q.825 0 1.412.587Q11 4.176 11 5v4q0 .825-.588 1.412A1.93 1.93 0 0 1 9 11zm0 10q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19v-4q0-.825.587-1.412A1.93 1.93 0 0 1 5 13h4q.825 0 1.412.588Q11 14.175 11 15v4q0 .824-.588 1.413A1.93 1.93 0 0 1 9 21zm10-10q-.825 0-1.412-.588A1.93 1.93 0 0 1 13 9V5q0-.824.588-1.412A1.93 1.93 0 0 1 15 3h4q.824 0 1.413.587Q21 4.176 21 5v4q0 .825-.587 1.412A1.93 1.93 0 0 1 19 11zm0 10q-.825 0-1.412-.587A1.93 1.93 0 0 1 13 19v-4q0-.825.588-1.412A1.93 1.93 0 0 1 15 13h4q.824 0 1.413.588Q21 14.175 21 15v4q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zM5 9h4V5H5zm10 0h4V5h-4zm0 10h4v-4h-4zM5 19h4v-4H5z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsGridView);
export default ForwardRef;
