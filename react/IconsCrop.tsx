import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsCrop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M17 23v-4H7q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 17V7H1V5h4V1h2v16h16v2h-4v4zm0-8V7H9V5h8q.824 0 1.413.588Q19 6.175 19 7v8z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsCrop);
export default ForwardRef;
