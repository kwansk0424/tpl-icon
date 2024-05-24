import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsExecutionModule = (
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
      <path
        fillRule="evenodd"
        d="M4.588 21.413Q5.175 22 6 22h4.25a1 1 0 0 0 1-1v-8.263c0-1.925 2.083-3.127 3.75-2.165l3.5 2.02a1 1 0 0 0 1.5-.866V8.826a1.98 1.98 0 0 0-.575-1.4l-4.85-4.85a1.975 1.975 0 0 0-1.4-.575H6q-.824 0-1.412.587A1.93 1.93 0 0 0 4 4v16q0 .824.588 1.413m8.7-12.7A.97.97 0 0 1 13 8V4l5 5h-4a.97.97 0 0 1-.713-.287"
        clipRule="evenodd"
      />
      <path d="M21.5 16.634a1 1 0 0 1 0 1.732l-6.75 3.897a1 1 0 0 1-1.5-.866v-7.794a1 1 0 0 1 1.5-.866z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsExecutionModule);
export default ForwardRef;
