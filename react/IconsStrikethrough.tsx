import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsStrikethrough = (
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
        d="M12.15 20q-1.575 0-2.912-.837a6.05 6.05 0 0 1-2.113-2.238.96.96 0 0 1-.062-.838q.162-.437.587-.662.45-.25.938-.088.488.163.762.613.45.75 1.213 1.2.762.45 1.637.45 1.099 0 1.913-.675.812-.675.812-1.725 0-.5.35-.85t.85-.35q.499 0 .863.35.362.35.362.85v.3q0 1.975-1.563 3.238T12.15 20M3 12a.97.97 0 0 1-.712-.287A.97.97 0 0 1 2 11q0-.424.288-.713A.97.97 0 0 1 3 10h18q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 21 12zm5.2-4.125a1.25 1.25 0 0 1-.575-.737q-.15-.488.1-.913a4.1 4.1 0 0 1 1.8-1.775q1.175-.6 2.525-.6 1.2 0 2.262.5A4.8 4.8 0 0 1 16.1 5.8q.275.35.175.8t-.475.725q-.425.3-.913.225a1.37 1.37 0 0 1-.837-.475 2.3 2.3 0 0 0-.875-.625 2.9 2.9 0 0 0-1.075-.2q-.675 0-1.3.275a1.97 1.97 0 0 0-.95.85q-.25.45-.737.6-.488.15-.913-.1"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsStrikethrough);
export default ForwardRef;
