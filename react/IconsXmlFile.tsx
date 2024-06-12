import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsXmlFile = (
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
        d="M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h7.175a1.98 1.98 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762V14a1 1 0 0 1-1 1H8a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1m7-14q0 .424.287.713Q13.576 9 14 9h4l-5-5zm-4 8H8v1a2 2 0 0 0 .677 1.5 2 2 0 0 0-.525.735A2 2 0 0 0 8 20v1h1v-1a1 1 0 0 1 .5-.866A1 1 0 0 1 10 20v1h1v-1a2 2 0 0 0-.677-1.5A2 2 0 0 0 11 17v-1h-1v1a1 1 0 0 1-.5.866A1 1 0 0 1 9 17zm8 1.5v3.447h-1V17.5a.5.5 0 0 0-1 0v3.447h-1V17.5a.5.5 0 0 0-1 0v3.447h-1V17.5a1.5 1.5 0 0 1 2.5-1.118A1.5 1.5 0 0 1 17 17.5m2-1.5h-1v5h3v-1h-2z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsXmlFile);
export default ForwardRef;
