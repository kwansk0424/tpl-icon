import * as React from 'react';
const IconsSkipPrevious = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
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
        fill="#000"
        d="M5.5 17V7q0-.424.287-.713A.97.97 0 0 1 6.5 6q.424 0 .713.287.287.288.287.713v10q0 .424-.287.712A.97.97 0 0 1 6.5 18a.97.97 0 0 1-.713-.288A.97.97 0 0 1 5.5 17m11.45-.025-6.2-4.15a1 1 0 0 1-.338-.362A1 1 0 0 1 10.3 12q0-.25.112-.463a1 1 0 0 1 .338-.362l6.2-4.15a.6.6 0 0 1 .275-.125q.15-.025.275-.025.4 0 .7.275t.3.725v8.25q0 .45-.3.725t-.7.275a2 2 0 0 1-.275-.025.6.6 0 0 1-.275-.125m-.45-2.725v-4.5L13.1 12z"
      />
    </g>
  </svg>
);
export default IconsSkipPrevious;
