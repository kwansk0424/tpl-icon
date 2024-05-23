import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsMoon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3a9 9 0 0 1 1.35.1 5.3 5.3 0 0 0-1.637 1.887A5.3 5.3 0 0 0 11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613A5.3 5.3 0 0 0 20.9 10.65 8.5 8.5 0 0 1 21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.212a7 7 0 0 0 2.55-3.163q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1a7 7 0 0 0-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95T12 19"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsMoon);
export default ForwardRef;