import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsFontSize = (
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
        d="M14 7h-3.5q-.625 0-1.062-.437A1.45 1.45 0 0 1 9 5.5q0-.625.438-1.062A1.45 1.45 0 0 1 10.5 4h10q.625 0 1.063.438Q22 4.874 22 5.5q0 .624-.437 1.063A1.45 1.45 0 0 1 20.5 7H17v11.5q0 .625-.437 1.063A1.45 1.45 0 0 1 15.5 20q-.625 0-1.062-.437A1.45 1.45 0 0 1 14 18.5zm-9 5H3.5q-.625 0-1.062-.437A1.45 1.45 0 0 1 2 10.5q0-.625.438-1.062A1.45 1.45 0 0 1 3.5 9h6q.624 0 1.063.438Q11 9.874 11 10.5q0 .624-.437 1.063A1.45 1.45 0 0 1 9.5 12H8v6.5q0 .625-.437 1.063A1.45 1.45 0 0 1 6.5 20q-.625 0-1.062-.437A1.45 1.45 0 0 1 5 18.5z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsFontSize);
export default ForwardRef;
