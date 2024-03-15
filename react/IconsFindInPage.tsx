import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsFindInPage = (
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
        d="m14.75 20 2 2H6q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h9l5 6v12q0 .5-.212.913a1.95 1.95 0 0 1-.588.687L14 16.45q-.425.274-.925.413A4 4 0 0 1 12 17q-1.65 0-2.825-1.175T8 13t1.175-2.825T12 9t2.825 1.175T16 13q0 .575-.137 1.075-.138.5-.413.925L18 17.6V8.7L14.05 4H6v16zM12 15q.825 0 1.412-.588Q14 13.826 14 13t-.588-1.412A1.93 1.93 0 0 0 12 11q-.825 0-1.412.588A1.93 1.93 0 0 0 10 13q0 .825.588 1.412Q11.175 15 12 15"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsFindInPage);
export default ForwardRef;
