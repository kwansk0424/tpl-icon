import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsPending = (
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
        d="M7 13.5q.624 0 1.063-.437Q8.5 12.625 8.5 12t-.437-1.062A1.45 1.45 0 0 0 7 10.5q-.625 0-1.062.438A1.45 1.45 0 0 0 5.5 12q0 .624.438 1.063.436.437 1.062.437m5 0q.624 0 1.063-.437.437-.438.437-1.063t-.437-1.062A1.45 1.45 0 0 0 12 10.5q-.625 0-1.062.438A1.45 1.45 0 0 0 10.5 12q0 .624.438 1.063.437.437 1.062.437m5 0q.625 0 1.063-.437.437-.438.437-1.063t-.437-1.062A1.45 1.45 0 0 0 17 10.5q-.625 0-1.062.438A1.45 1.45 0 0 0 15.5 12q0 .624.438 1.063.437.437 1.062.437M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsPending);
export default ForwardRef;
