import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsExpandContent = (
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
      <path fill="currentColor" d="M5 19v-6h2v4h4v2zm12-8V7h-4V5h6v6z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsExpandContent);
export default ForwardRef;
