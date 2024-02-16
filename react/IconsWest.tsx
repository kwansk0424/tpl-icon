import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsWest = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M5.825 13H21q.424 0 .712-.287A.97.97 0 0 0 22 12a.97.97 0 0 0-.288-.713A.97.97 0 0 0 21 11H5.825L9.7 7.1a.98.98 0 0 0 .287-.687A.93.93 0 0 0 9.7 5.7a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275l-5.6 5.6q-.15.15-.213.325a1.1 1.1 0 0 0-.062.375q0 .2.062.375a.9.9 0 0 0 .213.325l5.6 5.6a.93.93 0 0 0 .687.275q.413 0 .713-.275.3-.3.3-.713 0-.412-.3-.712z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsWest);
export default ForwardRef;
