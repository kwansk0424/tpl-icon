import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsVisibilityOff = (
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
        d="m16.1 13.3-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.424-.2.863-.3A4.2 4.2 0 0 1 12 7q1.875 0 3.188 1.313Q16.5 9.625 16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15-1.45-1.4a11 11 0 0 0 1.688-1.587A9 9 0 0 0 20.8 11.5q-1.25-2.524-3.588-4.012T12 6q-.724 0-1.425.1a10 10 0 0 0-1.375.3L7.65 4.85A11.1 11.1 0 0 1 12 4q3.775 0 6.725 2.088T23 11.5a11.7 11.7 0 0 1-1.512 2.738A11 11 0 0 1 19.3 16.45m.5 6.15-4.2-4.15q-.874.274-1.762.413Q12.95 19 12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.462A11.5 11.5 0 0 1 4.15 7L1.4 4.2l1.4-1.4 18.4 18.4zM5.55 8.4q-.725.65-1.325 1.425A9 9 0 0 0 3.2 11.5q1.25 2.524 3.587 4.013Q9.125 17 12 17q.5 0 .975-.062.475-.063.975-.138l-.9-.95q-.274.075-.525.113A3.5 3.5 0 0 1 12 16q-1.875 0-3.187-1.312Q7.499 13.375 7.5 11.5q0-.274.037-.525.038-.25.113-.525z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsVisibilityOff);
export default ForwardRef;
