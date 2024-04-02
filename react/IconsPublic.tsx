import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsPublic = (
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
        d="M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m-1-2.05V18q-.825 0-1.412-.587A1.93 1.93 0 0 1 9 16v-1l-4.8-4.8q-.075.45-.138.9Q4 11.55 4 12q0 3.025 1.987 5.3T11 19.95m6.9-2.55q.5-.55.9-1.187.4-.638.662-1.326.263-.687.4-1.412Q20 12.75 20 12a7.85 7.85 0 0 0-1.363-4.475A7.7 7.7 0 0 0 15 4.6V5q0 .824-.588 1.412A1.93 1.93 0 0 1 13 7h-2v2q0 .424-.287.713A.97.97 0 0 1 10 10H8v2h6q.424 0 .713.287.287.288.287.713v3h1q.65 0 1.175.387.525.388.725 1.013"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsPublic);
export default ForwardRef;