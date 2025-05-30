import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsDangerous = (
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
        d="M9.075 21a1.98 1.98 0 0 1-1.4-.575l-4.1-4.1a1.975 1.975 0 0 1-.575-1.4v-5.85a1.98 1.98 0 0 1 .575-1.4l4.1-4.1q.275-.275.638-.425.361-.15.762-.15h5.85a1.98 1.98 0 0 1 1.4.575l4.1 4.1q.275.275.425.638.15.361.15.762v5.85a1.98 1.98 0 0 1-.575 1.4l-4.1 4.1a1.975 1.975 0 0 1-1.4.575zm.025-2h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8zm2.9-5.6 2.15 2.15a.95.95 0 0 0 .7.275.95.95 0 0 0 .7-.275.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7L13.4 12l2.15-2.15a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275L12 10.6 9.85 8.45a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275.95.95 0 0 0-.275.7q0 .425.275.7L10.6 12l-2.15 2.15a.95.95 0 0 0-.275.7q0 .425.275.7a.95.95 0 0 0 .7.275.95.95 0 0 0 .7-.275z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsDangerous);
export default ForwardRef;
