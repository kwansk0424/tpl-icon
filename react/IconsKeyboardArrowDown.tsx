import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsKeyboardArrowDown = (
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
      <path fill="currentColor" d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsKeyboardArrowDown);
export default ForwardRef;
