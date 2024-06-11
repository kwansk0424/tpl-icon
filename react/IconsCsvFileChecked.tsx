import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsCsvFileChecked = (
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
        d="M4.588 21.413Q5.175 22 6 22a1 1 0 0 0 1-1v-5a1 1 0 0 1 .588-.912L5.5 13a2.121 2.121 0 1 1 3-3l3 3 4-4H14a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8V4l3.75 3.75 1.5-1.5-3.675-3.675a1.975 1.975 0 0 0-1.4-.575H6q-.824 0-1.412.587A1.93 1.93 0 0 0 4 4v16q0 .824.588 1.413M15 16h-.5L13 17.5a2.1 2.1 0 0 1-1 .562V19h2a1 1 0 0 1-1 1h-1v1h1a2 2 0 0 0 2-2v-1h-2a1 1 0 0 1 1-1h1zm5-5.5L15.5 15H19a1 1 0 0 0 1-1zM8.858 16.358l.73.73A1 1 0 0 0 9 18v1a1 1 0 0 0 1 1h1v1h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 .858-1.642M16 16h1v4a1 1 0 0 0 1-1v-3h1v3a2 2 0 0 1-2 2h-1zm3.854-9.67-8.247 8.247-3.795-3.846a.95.95 0 0 0-.693-.292.95.95 0 0 0-.694.292 1 1 0 0 0-.304.694.9.9 0 0 0 .28.693l4.525 4.552a.93.93 0 0 0 .681.291q.39 0 .681-.291l8.929-8.953a.95.95 0 0 0 .292-.693.95.95 0 0 0-.292-.694.93.93 0 0 0-.682-.292.93.93 0 0 0-.68.292"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsCsvFileChecked);
export default ForwardRef;
