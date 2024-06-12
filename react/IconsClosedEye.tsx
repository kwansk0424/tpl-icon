import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsClosedEye = (
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
        d="M20.633 9.37c.188-.423.835-.516 1.052-.105q.129.246.246.502c.092.2.092.425 0 .624a9.9 9.9 0 0 1-2.782 3.6l1.217 1.757c.276.399.112.909-.366 1.139s-1.09.093-1.366-.305L17.58 15.06q-2.12 1.2-4.58 1.4v1.707c0 .46-.448.833-1 .833s-1-.373-1-.833V16.46a11 11 0 0 1-4.935-1.61l-1.199 1.732c-.276.398-.888.535-1.366.305s-.642-.74-.366-1.139l1.403-2.024a9.9 9.9 0 0 1-2.468-3.333.74.74 0 0 1 0-.624q.117-.256.247-.502c.216-.411.863-.318 1.05.105.656 1.478 1.893 2.888 3.492 3.9q.193.126.394.244Q9.414 14.788 12 14.788t4.748-1.274a10 10 0 0 0 .394-.244c1.6-1.012 2.836-2.422 3.491-3.9"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsClosedEye);
export default ForwardRef;