import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsCalendarMonth = (
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
        d="M5 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 20V6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4h1V2h2v2h8V2h2v2h1q.824 0 1.413.588Q21 5.175 21 6v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 22zm0-2h14V10H5zM5 8h14V6H5zm7 6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 13q0-.424.287-.713A.97.97 0 0 1 12 12q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 12 14m-4 0a.97.97 0 0 1-.713-.287A.97.97 0 0 1 7 13q0-.424.287-.713A.97.97 0 0 1 8 12q.424 0 .713.287Q9 12.576 9 13q0 .424-.287.713A.97.97 0 0 1 8 14m8 0a.97.97 0 0 1-.713-.287A.97.97 0 0 1 15 13q0-.424.287-.713A.97.97 0 0 1 16 12q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 16 14m-4 4a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 17q0-.424.287-.712A.97.97 0 0 1 12 16q.424 0 .713.288.287.287.287.712 0 .424-.287.712A.97.97 0 0 1 12 18m-4 0a.97.97 0 0 1-.713-.288A.97.97 0 0 1 7 17q0-.424.287-.712A.97.97 0 0 1 8 16q.424 0 .713.288Q9 16.575 9 17q0 .424-.287.712A.97.97 0 0 1 8 18m8 0a.97.97 0 0 1-.713-.288A.97.97 0 0 1 15 17q0-.424.287-.712A.97.97 0 0 1 16 16q.424 0 .712.288.288.287.288.712 0 .424-.288.712A.97.97 0 0 1 16 18"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsCalendarMonth);
export default ForwardRef;
