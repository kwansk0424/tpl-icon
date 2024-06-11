import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsImageChecked = (
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
        d="M3.588 20.413Q4.175 21 5 21h14q.824 0 1.413-.587Q21 19.825 21 19V9.5l-2 2V19H5v-6.791a2.13 2.13 0 0 1 0-1.418V5h14v.5a2.12 2.12 0 0 1 2-.562 1.92 1.92 0 0 0-.587-1.35A1.93 1.93 0 0 0 19 3H5q-.824 0-1.412.587A1.93 1.93 0 0 0 3 5v14q0 .824.587 1.413m12.483-5.984L13.5 17H18zM7.5 15 6 17h3.5zm12.354-8.67-8.247 8.247-3.795-3.846a.95.95 0 0 0-.693-.292.95.95 0 0 0-.694.292 1 1 0 0 0-.304.694.9.9 0 0 0 .28.693l4.525 4.552a.93.93 0 0 0 .681.291q.39 0 .681-.291l8.929-8.953a.95.95 0 0 0 .292-.693.95.95 0 0 0-.292-.694.93.93 0 0 0-.682-.292.93.93 0 0 0-.68.292"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsImageChecked);
export default ForwardRef;
