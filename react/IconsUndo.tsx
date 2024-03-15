import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M7 19v-2h7.1q1.576 0 2.737-1Q18 15 18 13.5T16.837 11 14.1 10H7.8l2.6 2.6L9 14 4 9l5-5 1.4 1.4L7.8 8h6.3q2.425 0 4.163 1.575Q20 11.15 20 13.5t-1.738 3.925Q16.526 19 14.1 19z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsUndo);
export default ForwardRef;
