import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsUnderlined = (
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
        d="M6 21a.97.97 0 0 1-.713-.288A.97.97 0 0 1 5 20q0-.424.287-.712A.97.97 0 0 1 6 19h12q.424 0 .712.288.288.287.288.712 0 .424-.288.712A.97.97 0 0 1 18 21zm6-4q-2.525 0-3.925-1.575t-1.4-4.175V4.275q0-.525.388-.9A1.27 1.27 0 0 1 7.975 3q.525 0 .9.375t.375.9V11.4q0 1.4.7 2.275t2.05.875 2.05-.875.7-2.275V4.275q0-.525.387-.9A1.27 1.27 0 0 1 16.05 3q.525 0 .9.375t.375.9v6.975q0 2.6-1.4 4.175T12 17"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsUnderlined);
export default ForwardRef;
