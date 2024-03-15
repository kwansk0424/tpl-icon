import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsRemove = (
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
        d="M6 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h12q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 18 13z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsRemove);
export default ForwardRef;
