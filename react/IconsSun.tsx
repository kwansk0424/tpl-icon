import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsSun = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M12 23.3 8.65 20H4v-4.65L.7 12 4 8.65V4h4.65L12 .7 15.35 4H20v4.65L23.3 12 20 15.35V20h-4.65zm0-6.3q2.075 0 3.537-1.463Q17 14.075 17 12q0-2.075-1.463-3.537Q14.075 7 12 7 9.925 7 8.463 8.463 7 9.926 7 12q0 2.075 1.463 3.537Q9.926 17 12 17m0-2a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 9 12q0-1.25.875-2.125A2.9 2.9 0 0 1 12 9q1.25 0 2.125.875T15 12t-.875 2.125A2.9 2.9 0 0 1 12 15m0 5.5 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsSun);
export default ForwardRef;