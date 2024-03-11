import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M9.9 19q-2.425 0-4.163-1.575Q4 15.85 4 13.5t1.737-3.925T9.9 8h6.3l-2.6-2.6L15 4l5 5-5 5-1.4-1.4 2.6-2.6H9.9q-1.575 0-2.738 1Q6 12 6 13.5T7.162 16q1.164 1 2.738 1H17v2z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsRedo);
export default ForwardRef;
