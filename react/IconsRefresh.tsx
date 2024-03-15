import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsRefresh = (
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
        d="M12 21q3.45 0 6.012-2.288Q20.575 16.426 20.95 13H18.9q-.35 2.6-2.312 4.3Q14.624 19 12 19q-2.925 0-4.962-2.038T5 12t2.037-4.962T12 5a6.75 6.75 0 0 1 3.225.8A7.4 7.4 0 0 1 17.75 8H15v2h6V4h-2v2.35a8.7 8.7 0 0 0-3.113-2.475A8.9 8.9 0 0 0 12 3q-1.874 0-3.512.712a9.2 9.2 0 0 0-2.85 1.926 9.2 9.2 0 0 0-1.925 2.85A8.7 8.7 0 0 0 3 12q0 1.874.712 3.512a9.2 9.2 0 0 0 1.926 2.85 9.2 9.2 0 0 0 2.85 1.926A8.7 8.7 0 0 0 12 21"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsRefresh);
export default ForwardRef;
