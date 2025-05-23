import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsAccuracy = (
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
    <g fill="currentColor" mask="url(#prefix__a)">
      <path d="M12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.65 0 2.825-1.175T16 12t-1.175-2.825T12 8 9.175 9.175 8 12t1.175 2.825T12 16m0-2q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 12q0-.825.588-1.412A1.93 1.93 0 0 1 12 10q.825 0 1.412.588Q14 11.175 14 12t-.588 1.412A1.93 1.93 0 0 1 12 14" />
      <rect width={20} height={2} x={2} y={11} rx={1} />
      <rect
        width={20}
        height={2}
        x={13}
        y={2}
        rx={1}
        transform="rotate(90 13 2)"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsAccuracy);
export default ForwardRef;
