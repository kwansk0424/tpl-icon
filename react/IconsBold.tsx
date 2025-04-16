import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M8.8 19q-.825 0-1.413-.587A1.93 1.93 0 0 1 6.8 17V7q0-.824.587-1.412A1.93 1.93 0 0 1 8.8 5h3.525q1.624 0 3 1T16.7 8.775q0 1.275-.575 1.963-.575.687-1.075.987.625.275 1.387 1.025.763.75.763 2.25 0 2.224-1.625 3.113-1.625.887-3.05.887zm1.025-2.8h2.6q1.2 0 1.462-.612.263-.614.263-.888 0-.275-.263-.887-.262-.613-1.537-.613H9.825zm0-5.7h2.325q.825 0 1.2-.425a1.4 1.4 0 0 0 .375-.95q0-.6-.425-.975-.426-.375-1.1-.375H9.825z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsBold);
export default ForwardRef;
