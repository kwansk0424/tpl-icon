import * as React from 'react';
const IconsHomeStorage = (props) => (
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
        d="M5 21 3 9h18l-2 12zm1.675-2h10.65l1.275-8H5.4zM10 15h4q.424 0 .713-.287A.97.97 0 0 0 15 14a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 13h-4a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 14q0 .424.287.713Q9.576 15 10 15M6 8a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 7q0-.424.287-.713A.97.97 0 0 1 6 6h12q.424 0 .712.287Q19 6.576 19 7q0 .424-.288.713A.97.97 0 0 1 18 8zm2-3a.97.97 0 0 1-.713-.287A.97.97 0 0 1 7 4q0-.424.287-.712A.97.97 0 0 1 8 3h8q.424 0 .712.288Q17 3.575 17 4q0 .424-.288.713A.97.97 0 0 1 16 5z"
      />
    </g>
  </svg>
);
export default IconsHomeStorage;
