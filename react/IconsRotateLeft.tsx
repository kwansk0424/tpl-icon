import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsRotateLeft = (
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
        d="M11 22a8.2 8.2 0 0 1-2.4-.613Q7.45 20.9 6.4 20.1l1.4-1.45q.725.525 1.537.85a7.3 7.3 0 0 0 1.663.45zm2 0v-2.05q2.6-.376 4.3-2.337Q19 15.65 19 13.05q0-2.925-2.038-4.962T12 6.05h-.2l1.6 1.6-1.4 1.4-4-4 4-4 1.4 1.45-1.55 1.55H12q1.874 0 3.512.713a9.2 9.2 0 0 1 2.85 1.925 9.2 9.2 0 0 1 1.925 2.85A8.7 8.7 0 0 1 21 13.05q0 3.424-2.275 5.962T13 22m-8.05-3.35q-.8-1.05-1.288-2.2a8.2 8.2 0 0 1-.612-2.4H5.1q.124.85.45 1.662.325.813.85 1.538zm-1.9-6.6q.15-1.275.625-2.45.474-1.175 1.275-2.15l1.45 1.4q-.526.725-.85 1.537a7.3 7.3 0 0 0-.45 1.663z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsRotateLeft);
export default ForwardRef;
