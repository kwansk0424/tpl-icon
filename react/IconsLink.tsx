import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsLink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M7 17q-2.074 0-3.537-1.463T2 12q0-2.075 1.463-3.537Q4.925 7 7 7h3q.424 0 .713.287Q11 7.576 11 8q0 .424-.287.713A.97.97 0 0 1 10 9H7q-1.25 0-2.125.875A2.9 2.9 0 0 0 4 12q0 1.25.875 2.125A2.9 2.9 0 0 0 7 15h3q.424 0 .713.287.287.288.287.713 0 .424-.287.712A.97.97 0 0 1 10 17zm2-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 8 12q0-.424.287-.713A.97.97 0 0 1 9 11h6q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 15 13zm5 4a.97.97 0 0 1-.713-.288A.97.97 0 0 1 13 16q0-.424.287-.713A.97.97 0 0 1 14 15h3q1.25 0 2.125-.875A2.9 2.9 0 0 0 20 12q0-1.25-.875-2.125A2.9 2.9 0 0 0 17 9h-3a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8q0-.424.287-.713A.97.97 0 0 1 14 7h3q2.075 0 3.538 1.463T22 12t-1.462 3.537Q19.074 17 17 17z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsLink);
export default ForwardRef;
