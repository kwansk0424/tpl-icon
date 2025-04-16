import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsBulletedList = (
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
        d="M10 19a.97.97 0 0 1-.713-.288A.97.97 0 0 1 9 18q0-.424.287-.712A.97.97 0 0 1 10 17h10q.424 0 .712.288.288.287.288.712 0 .424-.288.712A.97.97 0 0 1 20 19zm0-6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 9 12q0-.424.287-.713A.97.97 0 0 1 10 11h10q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 20 13zm0-6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 9 6q0-.424.287-.713A.97.97 0 0 1 10 5h10q.424 0 .712.287Q21 5.576 21 6q0 .424-.288.713A.97.97 0 0 1 20 7zM5 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 18q0-.824.587-1.413A1.93 1.93 0 0 1 5 16q.824 0 1.412.587Q7 17.176 7 18q0 .824-.588 1.413A1.93 1.93 0 0 1 5 20m0-6q-.824 0-1.412-.588A1.93 1.93 0 0 1 3 12q0-.825.587-1.412A1.93 1.93 0 0 1 5 10q.824 0 1.412.588Q7 11.175 7 12t-.588 1.412A1.93 1.93 0 0 1 5 14m0-6q-.824 0-1.412-.588A1.93 1.93 0 0 1 3 6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4q.824 0 1.412.588Q7 5.175 7 6q0 .824-.588 1.412A1.93 1.93 0 0 1 5 8"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsBulletedList);
export default ForwardRef;
