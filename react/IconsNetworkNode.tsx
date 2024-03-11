import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsNetworkNode = (
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
        d="M5.5 22a3.37 3.37 0 0 1-2.475-1.025A3.37 3.37 0 0 1 2 18.5q0-1.45 1.025-2.475A3.37 3.37 0 0 1 5.5 15q.45 0 .875.113t.8.312L11 11.6V8.85a3.45 3.45 0 0 1-1.8-1.237Q8.5 6.7 8.5 5.5q0-1.45 1.025-2.475A3.37 3.37 0 0 1 12 2q1.45 0 2.475 1.025A3.37 3.37 0 0 1 15.5 5.5q0 1.2-.7 2.113A3.45 3.45 0 0 1 13 8.85v2.75l3.85 3.825q.375-.2.787-.312Q18.05 15 18.5 15q1.45 0 2.475 1.025A3.37 3.37 0 0 1 22 18.5q0 1.45-1.025 2.475A3.37 3.37 0 0 1 18.5 22a3.37 3.37 0 0 1-2.475-1.025A3.37 3.37 0 0 1 15 18.5q0-.45.113-.875t.312-.8L12 13.4l-3.425 3.425q.2.375.313.8T9 18.5q0 1.45-1.025 2.475A3.37 3.37 0 0 1 5.5 22m13-2q.625 0 1.063-.437Q20 19.125 20 18.5t-.437-1.062A1.45 1.45 0 0 0 18.5 17q-.625 0-1.062.438A1.45 1.45 0 0 0 17 18.5q0 .625.438 1.063.437.437 1.062.437M12 7q.624 0 1.063-.437.437-.438.437-1.063t-.437-1.062A1.45 1.45 0 0 0 12 4q-.625 0-1.062.438A1.45 1.45 0 0 0 10.5 5.5q0 .624.438 1.063Q11.375 7 12 7M5.5 20q.624 0 1.063-.437Q7 19.125 7 18.5t-.437-1.062A1.45 1.45 0 0 0 5.5 17q-.625 0-1.062.438A1.45 1.45 0 0 0 4 18.5q0 .625.438 1.063Q4.874 20 5.5 20"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsNetworkNode);
export default ForwardRef;
