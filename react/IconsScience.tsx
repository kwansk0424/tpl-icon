import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsScience = (
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
        d="M5 21q-1.275 0-1.812-1.137t.262-2.113L9 11V5H8a.97.97 0 0 1-.712-.287A.97.97 0 0 1 7 4q0-.424.288-.712A.97.97 0 0 1 8 3h8q.425 0 .713.288Q17 3.575 17 4q0 .424-.287.713A.97.97 0 0 1 16 5h-1v6l5.55 6.75q.8.975.263 2.113Q20.275 21 19 21zm0-2h14l-6-7.3V5h-2v6.7z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsScience);
export default ForwardRef;
