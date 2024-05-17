import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsCollapseContent = (
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
      <path fill="currentColor" d="M11 13v6H9v-4H5v-2zm4-8v4h4v2h-6V5z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsCollapseContent);
export default ForwardRef;
