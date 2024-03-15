import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsLoss = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        fillRule="evenodd"
        d="M13 3a1 1 0 1 0-2 0v3.075Q9.14 6.36 7.75 7.75T6.075 11H3a1 1 0 1 0 0 2h3.075q.286 1.86 1.675 3.25T11 17.925V21a1 1 0 1 0 2 0v-3.075q1.86-.286 3.25-1.675T17.925 13H21a1 1 0 1 0 0-2h-.574a2.2 2.2 0 0 1-1.112 0h-1.389a5.7 5.7 0 0 0-.371-1.334l-.018-.018-.779.778c-.256.257-.56.437-.884.54l.009.034h-.125a2.2 2.2 0 0 1-1.112 0h-.91a2 2 0 0 0-.322-.412 2 2 0 0 0-.413-.324V8.12q.06.014.12.032c.106-.306.28-.593.525-.837l.778-.778-.09-.09A5.7 5.7 0 0 0 13 6.075zm-2 5.118q-1.023.255-1.825 1.057T8.118 11h2.146q.13-.22.324-.412.193-.194.412-.324zm0 5.618a2 2 0 0 1-.412-.324 2 2 0 0 1-.324-.412H8.118q.255 1.023 1.057 1.825T11 15.882zm2 2.146v-2.146q.22-.13.412-.324.194-.193.324-.412h2.146q-.255 1.023-1.057 1.825T13 15.882m7.364-7.932a1 1 0 1 1-1.414 1.414L17.535 7.95l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414-1.414-1.415a1 1 0 0 1 1.414-1.414l1.415 1.414 1.414-1.414a1 1 0 0 1 1.414 1.414L18.95 6.536z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsLoss);
export default ForwardRef;
