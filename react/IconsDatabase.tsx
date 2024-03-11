import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsDatabase = (
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
        d="M12 21q-3.775 0-6.387-1.163Q3 18.676 3 17V7q0-1.65 2.638-2.825T12 3t6.363 1.175T21 7v10q0 1.676-2.613 2.837Q15.776 21 12 21m0-11.975q2.225 0 4.475-.638Q18.725 7.75 19 7.025q-.274-.725-2.512-1.375a15.87 15.87 0 0 0-8.95-.013Q5.35 6.276 5 7.026q.35.75 2.537 1.375 2.188.625 4.463.625M12 14q1.05 0 2.025-.1t1.862-.287 1.675-.463A10 10 0 0 0 19 12.525v-3a10 10 0 0 1-1.437.625q-.788.275-1.675.463-.888.187-1.863.287T12 11t-2.05-.1a18 18 0 0 1-1.887-.287A13 13 0 0 1 6.4 10.15 9 9 0 0 1 5 9.525v3q.625.35 1.4.625t1.662.463 1.888.287T12 14m0 5q1.15 0 2.338-.175a17 17 0 0 0 2.187-.462q1-.288 1.675-.65t.8-.738v-2.45a10 10 0 0 1-1.437.625q-.788.275-1.675.463-.888.187-1.863.287T12 16t-2.05-.1a18 18 0 0 1-1.887-.287A13 13 0 0 1 6.4 15.15a9 9 0 0 1-1.4-.625V17q.125.375.787.725.663.35 1.663.637t2.2.463T12 19"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsDatabase);
export default ForwardRef;
