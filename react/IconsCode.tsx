import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsCode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M4.825 12.025 8.7 15.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275l-4.6-4.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 2.425 12q0-.2.062-.375A.9.9 0 0 1 2.7 11.3l4.6-4.6q.3-.3.712-.3.413 0 .713.3t.3.712q0 .414-.3.713zm14.35-.05L15.3 8.1a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l4.6 4.6q.15.15.212.325.063.175.063.375t-.063.375a.9.9 0 0 1-.212.325l-4.6 4.6q-.3.3-.7.287a1 1 0 0 1-.7-.312q-.3-.3-.3-.712 0-.413.3-.713z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsCode);
export default ForwardRef;
