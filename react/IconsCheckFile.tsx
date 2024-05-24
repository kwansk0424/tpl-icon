import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsCheckFile = (
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
    <g fill="currentColor" mask="url(#prefix__a)">
      <path d="M4.588 21.413Q5.175 22 6 22h12q.824 0 1.413-.587Q20 20.825 20 20v-8.5l-6.362 6.361q-.181.183-.386.324a2.62 2.62 0 0 1-3.736.034L5 13.555a2.62 2.62 0 0 1 0-3.703c1.023-1.023 2.532-1.023 3.555 0l2.546 2.546L14.5 9H14a.97.97 0 0 1-.713-.287A.97.97 0 0 1 13 8V4l3.25 3.25 1.5-1.5-3.175-3.175a1.975 1.975 0 0 0-1.4-.575H6q-.824 0-1.412.587A1.93 1.93 0 0 0 4 4v16q0 .824.588 1.413" />
      <path d="M11.288 14.775 19.763 6.3q.3-.3.7-.3t.7.3.3.713-.3.712l-9.175 9.2q-.3.3-.7.3a.96.96 0 0 1-.7-.3l-4.3-4.3A.93.93 0 0 1 6 11.912a1.02 1.02 0 0 1 .313-.712q.3-.3.713-.3.412 0 .712.3z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsCheckFile);
export default ForwardRef;
