import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsLastPageCustom = (
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
    <g fill="currentColor" mask="url(#prefix__a)">
      <path d="M9.6 11.7 5 16.3l1.4 1.4 6-6-6-6L5 7.1z" />
      <path d="m16 11.7-4.6 4.6 1.4 1.4 6-6-6-6-1.4 1.4z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsLastPageCustom);
export default ForwardRef;
