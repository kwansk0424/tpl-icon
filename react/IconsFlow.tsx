import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsFlow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M15.938 20.906a1 1 0 0 1-1-1v-2h-3a1 1 0 0 1-1-1v-9h-2v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2h6v-2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2h-2v8h2v-2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zm1-12h3v-4h-3zm0 10h3v-4h-3zm-13-10h3v-4h-3z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsFlow);
export default ForwardRef;
