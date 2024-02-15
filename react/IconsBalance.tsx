import * as React from 'react';
const IconsBalance = (props) => (
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
        d="M2 21v-2h9V7.825A2.92 2.92 0 0 1 9.175 6H6l3 7q0 1.25-1.025 2.125T5.5 16t-2.475-.875T2 13l3-7H3V4h6.175a2.9 2.9 0 0 1 1.075-1.437A2.9 2.9 0 0 1 12 2q.975 0 1.75.563A2.9 2.9 0 0 1 14.825 4H21v2h-2l3 7q0 1.25-1.025 2.125T18.5 16t-2.475-.875T15 13l3-7h-3.175A2.92 2.92 0 0 1 13 7.825V19h9v2zm14.625-8h3.75L18.5 8.65zm-13 0h3.75L5.5 8.65zM12 6q.424 0 .713-.287A.97.97 0 0 0 13 5a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 5q0 .424.287.713Q11.576 6 12 6"
      />
    </g>
  </svg>
);
export default IconsBalance;
