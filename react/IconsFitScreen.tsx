import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsFitScreen = (
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
        d="M20 8V6h-2a.97.97 0 0 1-.712-.287A.97.97 0 0 1 17 5q0-.424.288-.713A.97.97 0 0 1 18 4h2q.824 0 1.413.588Q22 5.175 22 6v2q0 .424-.288.713A.97.97 0 0 1 21 9a.97.97 0 0 1-.712-.287A.97.97 0 0 1 20 8M2 8V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h2q.424 0 .713.287Q7 4.576 7 5q0 .424-.287.713A.97.97 0 0 1 6 6H4v2q0 .424-.288.713A.97.97 0 0 1 3 9a.97.97 0 0 1-.712-.287A.97.97 0 0 1 2 8m18 12h-2a.97.97 0 0 1-.712-.288A.97.97 0 0 1 17 19q0-.424.288-.712A.97.97 0 0 1 18 18h2v-2q0-.424.288-.713A.97.97 0 0 1 21 15q.424 0 .712.287.288.288.288.713v2q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20M4 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18v-2q0-.424.288-.713A.97.97 0 0 1 3 15q.424 0 .712.287Q4 15.576 4 16v2h2q.424 0 .713.288Q7 18.575 7 19q0 .424-.287.712A.97.97 0 0 1 6 20zm2-6v-4q0-.825.588-1.412A1.93 1.93 0 0 1 8 8h8q.824 0 1.413.588Q18 9.175 18 10v4q0 .825-.587 1.412A1.93 1.93 0 0 1 16 16H8q-.824 0-1.412-.588A1.93 1.93 0 0 1 6 14m2 0h8v-4H8z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsFitScreen);
export default ForwardRef;
