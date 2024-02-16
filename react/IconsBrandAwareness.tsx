import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsBrandAwareness = (
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
        d="M19 13h-2a.97.97 0 0 1-.712-.287A.97.97 0 0 1 16 12q0-.424.288-.712A.97.97 0 0 1 17 11h2q.424 0 .712.288.288.287.288.712 0 .424-.288.713A.97.97 0 0 1 19 13m-4.4 3.8a.91.91 0 0 1 .65-.4q.4-.05.75.2l1.6 1.2a.91.91 0 0 1 .4.65q.05.4-.2.75a.91.91 0 0 1-.65.4 1.03 1.03 0 0 1-.75-.2l-1.6-1.2a.91.91 0 0 1-.4-.65 1.03 1.03 0 0 1 .2-.75m3-10.6L16 7.4a1.03 1.03 0 0 1-.75.2.91.91 0 0 1-.65-.4 1.03 1.03 0 0 1-.2-.75.91.91 0 0 1 .4-.65l1.6-1.2q.35-.25.75-.2a.91.91 0 0 1 .65.4q.25.35.2.75a.91.91 0 0 1-.4.65M7 15H4a.97.97 0 0 1-.712-.287A.97.97 0 0 1 3 14v-4q0-.424.288-.712A.97.97 0 0 1 4 9h3l3.3-3.3q.476-.475 1.087-.212.613.262.613.937v11.15q0 .675-.613.938-.612.262-1.087-.213zm3-6.15L7.85 11H5v2h2.85L10 15.15z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsBrandAwareness);
export default ForwardRef;
