import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsCsvFile = (
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
        fillRule="evenodd"
        d="M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h7.175a1.98 1.98 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762V14a1 1 0 0 1-1 1H8a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1m7-14q0 .424.287.713Q13.576 9 14 9h4l-5-5zm-2 8v1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1v1h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zm6 0h-1v5h1a2 2 0 0 0 2-2v-3h-1v3a1 1 0 0 1-1 1zm-5 2v1h2a1 1 0 0 1-1 1h-1v1h1a2 2 0 0 0 2-2v-1h-2a1 1 0 0 1 1-1h1v-1h-1a2 2 0 0 0-2 2"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsCsvFile);
export default ForwardRef;
