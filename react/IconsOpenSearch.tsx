import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsOpenSearch = (
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
        d="M2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q3.175 0 5.663 1.75 2.487 1.75 3.612 4.525.175.425.013.85a.936.936 0 0 1-1.35.5 1.1 1.1 0 0 1-.513-.6q-.6-1.5-1.725-2.65A7.7 7.7 0 0 0 15 4.6V5q0 .824-.588 1.412A1.93 1.93 0 0 1 13 7h-2v2q0 .424-.287.713A.97.97 0 0 1 10 10H8v2h1q.424 0 .713.287.287.288.287.713v2H9l-4.8-4.8q-.075.45-.138.9Q4 11.55 4 12q0 3.05 2.013 5.325t5.062 2.625q.4.05.663.338.262.287.262.712 0 .424-.287.712a.79.79 0 0 1-.688.238Q7.2 21.575 4.6 18.75T2 12m18.4 8.8-2.5-2.5q-.525.3-1.125.5T15.5 19q-1.875 0-3.187-1.312Q11 16.375 11 14.5t1.313-3.187T15.5 10t3.188 1.313T20 14.5q0 .675-.2 1.275t-.5 1.125l2.5 2.5a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275M15.5 17q1.05 0 1.775-.725T18 14.5t-.725-1.775T15.5 12t-1.775.725T13 14.5t.725 1.775T15.5 17"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsOpenSearch);
export default ForwardRef;
