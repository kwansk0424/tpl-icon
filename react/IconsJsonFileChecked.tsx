import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsJsonFileChecked = (
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
        d="M5.04 21.76c.483.269.96-.208.96-.76v-5a1 1 0 0 1 1-1h.5l-2-2a2.121 2.121 0 1 1 3-3l3 3 4-4H14a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8V4l3.75 3.75 1.5-1.5-3.675-3.675a1.975 1.975 0 0 0-1.4-.575H6q-.824 0-1.412.587A1.93 1.93 0 0 0 4 4v16q0 .824.588 1.413.21.21.453.346m5.011-4.21a2.12 2.12 0 0 0 2.158.45H13v1a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1h-2v-1q0-.229.051-.45M20 10.5 15.5 15H19a1 1 0 0 0 1-1zM8.5 16l.5.5V19a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1v-2H7v-1h1.5M21 21h-1v-3a1 1 0 0 0-1-1v4h-1v-5h1a2 2 0 0 1 2 2zm-5-3.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0m-2 0a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0zm5.854-11.17-8.247 8.247-3.795-3.846a.95.95 0 0 0-.693-.292.95.95 0 0 0-.694.292 1 1 0 0 0-.304.694.9.9 0 0 0 .28.693l4.525 4.552a.93.93 0 0 0 .681.291q.39 0 .681-.291l8.929-8.953a.95.95 0 0 0 .292-.693.95.95 0 0 0-.292-.694.93.93 0 0 0-.682-.292.93.93 0 0 0-.68.292"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsJsonFileChecked);
export default ForwardRef;
