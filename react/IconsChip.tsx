import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsChip = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M4 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 4 3h14q.824 0 1.413.587Q20 4.176 20 5v2h2v2h-2v2h2v2h-2v2h2v2h-2v2q0 .824-.587 1.413A1.93 1.93 0 0 1 18 21zm0-2h14V5H4zm2-2h5v-4H6zm6-7h4V7h-4zm-6 2h5V7H6zm6 5h4v-6h-4z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsChip);
export default ForwardRef;
