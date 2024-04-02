import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsSearchInsights = (
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
        d="M10 16q2.5 0 4.25-1.75T16 10t-1.75-4.25T10 4 5.75 5.75 4 10t1.75 4.25T10 16m0-3a.97.97 0 0 1-.713-.287A.97.97 0 0 1 9 12V7q0-.424.287-.713A.97.97 0 0 1 10 6q.424 0 .713.287Q11 6.576 11 7v5q0 .424-.287.713A.97.97 0 0 1 10 13m-3.5 0a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5.5 12V9q0-.424.287-.713A.97.97 0 0 1 6.5 8q.424 0 .713.287.287.288.287.713v3q0 .424-.287.713A.97.97 0 0 1 6.5 13m7 0a.97.97 0 0 1-.713-.287A.97.97 0 0 1 12.5 12v-2q0-.424.287-.713A.97.97 0 0 1 13.5 9q.424 0 .713.287.287.288.287.713v2q0 .424-.287.713A.97.97 0 0 1 13.5 13M10 18q-3.35 0-5.675-2.325T2 10t2.325-5.675T10 2t5.675 2.325T18 10q0 1.4-.437 2.65a8 8 0 0 1-1.238 2.275L21.3 19.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275l-4.975-4.975A7.93 7.93 0 0 1 10 18"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsSearchInsights);
export default ForwardRef;