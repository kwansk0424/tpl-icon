import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsFilterList = (
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
      <path fill="currentColor" d="M10 18v-2h4v2zm-4-5v-2h12v2zM3 8V6h18v2z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsFilterList);
export default ForwardRef;
