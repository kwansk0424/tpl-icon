import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsKeyboardTab = (
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
        d="M21 18a.97.97 0 0 1-.712-.288A.97.97 0 0 1 20 17V7q0-.424.288-.713A.97.97 0 0 1 21 6q.424 0 .712.287Q22 6.576 22 7v10q0 .424-.288.712A.97.97 0 0 1 21 18m-6.825-5H3a.97.97 0 0 1-.712-.287A.97.97 0 0 1 2 12q0-.424.288-.713A.97.97 0 0 1 3 11h11.175L11.3 8.1a.98.98 0 0 1-.288-.687.93.93 0 0 1 .288-.713.95.95 0 0 1 .7-.275q.425 0 .7.275l4.6 4.6q.15.15.212.325.063.175.063.375t-.062.375a.9.9 0 0 1-.213.325l-4.6 4.6a.93.93 0 0 1-.687.275q-.413 0-.713-.275-.3-.3-.3-.713 0-.412.3-.712z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsKeyboardTab);
export default ForwardRef;
