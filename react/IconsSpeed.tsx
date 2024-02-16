import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsSpeed = (
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
        d="M10.45 15.5q.6.6 1.55.587.95-.012 1.4-.687L19 7l-8.4 5.6q-.675.45-.713 1.375t.563 1.525M12 4q1.475 0 2.838.412A9.2 9.2 0 0 1 17.4 5.65l-1.9 1.2A7.651 7.651 0 0 0 12 6Q8.675 6 6.338 8.338 4 10.675 4 14q0 1.05.287 2.075Q4.576 17.1 5.1 18h13.8a7.3 7.3 0 0 0 .838-1.975A8.5 8.5 0 0 0 20 13.9q0-.9-.212-1.75a7.3 7.3 0 0 0-.638-1.65l1.2-1.9q.75 1.175 1.188 2.5T22 13.85a9.8 9.8 0 0 1-.325 2.725 10.4 10.4 0 0 1-1.025 2.475q-.274.45-.75.7-.475.25-1 .25H5.1q-.525 0-1-.25a1.9 1.9 0 0 1-.75-.7A9.924 9.924 0 0 1 2 14q0-2.075.788-3.887a10.2 10.2 0 0 1 2.15-3.175 10.1 10.1 0 0 1 3.187-2.15A9.7 9.7 0 0 1 12 4"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsSpeed);
export default ForwardRef;
