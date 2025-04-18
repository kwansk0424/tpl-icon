import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsExternalCustom = (
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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 3a1 1 0 1 0 0 2h4.586l-6.293 6.293a1 1 0 0 0 1.414 1.414L19 6.414V11a1 1 0 1 0 2 0V3zM4.889 4H9v1.778H5.778v12.444h12.444V15H20v4.111c0 .491-.398.889-.889.889H4.89A.89.89 0 0 1 4 19.111V4.89C4 4.398 4.398 4 4.889 4"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(IconsExternalCustom);
export default ForwardRef;
