import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsPrecision = (
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
    <g
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      mask="url(#prefix__a)"
    >
      <path d="M13 4.267V3a1 1 0 1 0-2 0v1.267a2 2 0 0 1 2 0m-2.976 2.044Q8.762 6.738 7.75 7.75 6.361 9.14 6.075 11H3a1 1 0 1 0 0 2h3.075q.286 1.86 1.675 3.25T11 17.925V21a1 1 0 1 0 2 0v-3.075q1.86-.286 3.25-1.675T17.925 13H21a1 1 0 1 0 0-2h-3.075a5.7 5.7 0 0 0-.492-1.604l-1.019 1.018a2 2 0 0 1-.582.405q.027.09.05.181h-2.146a2 2 0 0 0-.324-.412 2 2 0 0 0-.412-.324v-.436l-2.414-2.414a2 2 0 0 1-.562-1.103m-.849 2.864Q9.977 8.373 11 8.118v2.146a2 2 0 0 0-.412.324 2 2 0 0 0-.324.412H8.118q.255-1.023 1.057-1.825m1.412 4.237q.194.194.413.324v2.146q-1.023-.255-1.825-1.057T8.118 13h2.146q.13.22.324.412m2.413.324v2.146q1.023-.255 1.825-1.057T15.882 13h-2.146a2 2 0 0 1-.324.412 2 2 0 0 1-.412.324" />
      <path d="M20.707 3.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L15 7.586l4.293-4.293a1 1 0 0 1 1.414 0" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsPrecision);
export default ForwardRef;
