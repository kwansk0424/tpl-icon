import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsTag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="m21.4 14.25-7.15 7.15q-.3.3-.675.45t-.75.15-.75-.15-.675-.45l-8.825-8.825a1.975 1.975 0 0 1-.575-1.4V4q0-.824.587-1.412A1.93 1.93 0 0 1 4 2h7.175q.4 0 .775.163.375.162.65.437l8.8 8.825q.3.3.438.675.137.375.137.75t-.138.738a1.9 1.9 0 0 1-.437.662M12.825 20l7.15-7.15L11.15 4H4v7.15zM6.5 8q.624 0 1.063-.437Q8 7.125 8 6.5t-.437-1.062A1.45 1.45 0 0 0 6.5 5q-.625 0-1.062.438A1.45 1.45 0 0 0 5 6.5q0 .624.438 1.063Q5.874 8 6.5 8"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsTag);
export default ForwardRef;
