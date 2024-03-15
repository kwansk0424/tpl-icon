import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsPhotoLibrary = (
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
        d="M13.25 12.5 12.1 11a.48.48 0 0 0-.4-.2q-.25 0-.4.2l-1.675 2.2q-.2.25-.062.525.136.275.462.275h7.95q.325 0 .462-.275.138-.275-.062-.525l-2.425-3.175a.48.48 0 0 0-.4-.2q-.25 0-.4.2zM8 18q-.824 0-1.412-.587A1.93 1.93 0 0 1 6 16V4q0-.824.588-1.412A1.93 1.93 0 0 1 8 2h12q.824 0 1.413.587Q22 3.176 22 4v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18zm0-2h12V4H8zm-4 6q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 20V7q0-.424.288-.713A.97.97 0 0 1 3 6q.424 0 .712.287Q4 6.576 4 7v13h13q.424 0 .712.288.288.287.288.712 0 .424-.288.712A.97.97 0 0 1 17 22z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsPhotoLibrary);
export default ForwardRef;
