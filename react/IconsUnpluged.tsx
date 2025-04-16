import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsUnpluged = (
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
        d="M9.5 21v-3L6 14.5V9q0-.6.275-1.125.276-.525.8-.8L9 9H8v4.65l3.5 3.5V19h1v-1.85l.925-.925L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4-4.95-4.95-.35.35v3zm7.65-6.7L16 13.15V9h-4.15L8 5.15V3h2v4h4V3h2v5l-1-1h1q.825 0 1.413.587Q18 8.175 18 9v4.45z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsUnpluged);
export default ForwardRef;
