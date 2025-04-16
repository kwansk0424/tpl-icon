import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsClose = (
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
        d="m12 13.4-4.9 4.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l4.9-4.9-4.9-4.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.424 0 .7.275l4.9 4.9 4.9-4.9a.95.95 0 0 1 .7-.275q.424 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L13.4 12l4.9 4.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsClose);
export default ForwardRef;
