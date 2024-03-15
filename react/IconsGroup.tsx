import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsGroup = (
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
        d="M1 20v-2.8q0-.85.438-1.562.437-.713 1.162-1.088a14.8 14.8 0 0 1 3.15-1.163A13.8 13.8 0 0 1 9 13q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.162 1.087Q17 16.35 17 17.2V20zm18 0v-3q0-1.1-.613-2.113-.612-1.012-1.737-1.737 1.275.15 2.4.512 1.125.363 2.1.888.9.5 1.375 1.112T23 17v3zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m10-4q0 1.65-1.175 2.825T15 12q-.275 0-.7-.062a6 6 0 0 1-.7-.138 6 6 0 0 0 1.037-1.775Q15 9.05 15 8t-.363-2.025A6 6 0 0 0 13.6 4.2a3 3 0 0 1 .7-.163Q14.65 4 15 4q1.65 0 2.825 1.175T19 8M3 18h12v-.8a.973.973 0 0 0-.5-.85q-1.35-.675-2.725-1.012a11.6 11.6 0 0 0-5.55 0Q4.85 15.675 3.5 16.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.412-.588Q11 8.826 11 8q0-.824-.588-1.412A1.93 1.93 0 0 0 9 6q-.825 0-1.412.588A1.93 1.93 0 0 0 7 8q0 .825.588 1.412Q8.175 10 9 10"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsGroup);
export default ForwardRef;
