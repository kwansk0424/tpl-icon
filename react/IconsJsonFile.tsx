import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsJsonFile = (
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
        d="M6 21c0 .552-.477 1.029-.96.76a2 2 0 0 1-.452-.348A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h7.175a1.98 1.98 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762V14a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1zm7-13q0 .424.287.713Q13.576 9 14 9h4l-5-5zm-6 9v-1h2v3a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1v-2zm3 2v-1a2 2 0 0 1 2-2h1v1h-1a1 1 0 0 0-1 1h2v1a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1zm10 2h1v-3a2 2 0 0 0-2-2h-1v5h1v-4a1 1 0 0 1 1 1zm-4-1.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0m-.5-3.5a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 3 0v-2a1.5 1.5 0 0 0-1.5-1.5"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsJsonFile);
export default ForwardRef;
