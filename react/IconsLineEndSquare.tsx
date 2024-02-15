import * as React from 'react';
const IconsLineEndSquare = (props) => (
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
        d="M13 15.5h7v-7h-7zm-1 2a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16.5V13H3a.97.97 0 0 1-.712-.287A.97.97 0 0 1 2 12q0-.424.288-.713A.97.97 0 0 1 3 11h8V7.5q0-.424.287-.713A.97.97 0 0 1 12 6.5h9q.424 0 .712.287.288.288.288.713v9q0 .424-.288.712A.97.97 0 0 1 21 17.5z"
      />
    </g>
  </svg>
);
export default IconsLineEndSquare;
