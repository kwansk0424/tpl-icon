import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsArchitecture = (
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
        d="m6.75 21-.25-2.2 2.85-7.85a3.95 3.95 0 0 0 1.75.95l-2.75 7.55zm10.5 0-1.6-1.55-2.75-7.55a3.948 3.948 0 0 0 1.75-.95l2.85 7.85zM12 11a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 9 8q0-.976.563-1.737A2.94 2.94 0 0 1 11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125A2.9 2.9 0 0 1 12 11m0-2q.424 0 .713-.287A.97.97 0 0 0 13 8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8q0 .424.287.713Q11.576 9 12 9"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsArchitecture);
export default ForwardRef;
