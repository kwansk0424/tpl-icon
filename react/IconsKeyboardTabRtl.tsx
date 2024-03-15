import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsKeyboardTabRtl = (
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
        d="M3 18a.97.97 0 0 1-.712-.288A.97.97 0 0 1 2 17V7q0-.424.288-.713A.97.97 0 0 1 3 6q.424 0 .712.287Q4 6.576 4 7v10q0 .424-.288.712A.97.97 0 0 1 3 18m6.825-5 2.875 2.875q.3.3.3.712 0 .413-.3.713-.3.275-.712.275a.93.93 0 0 1-.688-.275l-4.6-4.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 6.426 12q0-.2.063-.375A.9.9 0 0 1 6.7 11.3l4.6-4.6a.95.95 0 0 1 .7-.275q.425 0 .7.275.3.3.288.712a.98.98 0 0 1-.288.688L9.825 11H21q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 21 13z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsKeyboardTabRtl);
export default ForwardRef;
