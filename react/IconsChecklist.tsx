import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsChecklist = (
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
        d="M5.55 19 2 15.45l1.4-1.4 2.125 2.125 4.25-4.25 1.4 1.425zm0-8L2 7.45l1.4-1.4 2.125 2.125 4.25-4.25 1.4 1.425zM13 17v-2h9v2zm0-8V7h9v2z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsChecklist);
export default ForwardRef;
