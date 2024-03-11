import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsRotateRight = (
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
        d="M13.05 22v-2.05a7.3 7.3 0 0 0 1.662-.45 7 7 0 0 0 1.538-.85l1.4 1.45q-1.05.8-2.2 1.287a8.2 8.2 0 0 1-2.4.613m-2 0q-3.45-.45-5.725-2.988T3.05 13.05q0-1.874.712-3.513a9.2 9.2 0 0 1 1.925-2.85 9.2 9.2 0 0 1 2.85-1.924 8.7 8.7 0 0 1 3.513-.713h.15L10.65 2.5l1.4-1.45 4 4-4 4-1.4-1.4 1.6-1.6h-.2q-2.925 0-4.963 2.038Q5.05 10.125 5.05 13.05q0 2.6 1.7 4.563t4.3 2.337zm8.05-3.35-1.45-1.4q.525-.725.85-1.537a7.3 7.3 0 0 0 .45-1.663H21a8.2 8.2 0 0 1-.613 2.4q-.488 1.15-1.287 2.2m1.9-6.6h-2.05a7.3 7.3 0 0 0-.45-1.663 7.1 7.1 0 0 0-.85-1.537l1.45-1.4q.8.975 1.275 2.15T21 12.05"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsRotateRight);
export default ForwardRef;
