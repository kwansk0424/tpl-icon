import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsItalic = (
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
        d="M6.25 19q-.525 0-.888-.363A1.2 1.2 0 0 1 5 17.75q0-.525.362-.887.363-.363.888-.363H9l3-9H9.25q-.525 0-.887-.362A1.2 1.2 0 0 1 8 6.25q0-.525.363-.888Q8.725 5 9.25 5h7.5q.525 0 .887.362.363.363.363.888t-.363.888a1.2 1.2 0 0 1-.887.362H14.5l-3 9h2.25q.525 0 .887.363.363.362.363.887t-.363.887a1.2 1.2 0 0 1-.887.363z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsItalic);
export default ForwardRef;
