import * as React from 'react';
const IconsDeployedCode = (props) => (
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
        d="M11 19.425v-6.85L5 9.1v6.85zm2 0 6-3.475V9.1l-6 3.475zm-1-8.575 5.925-3.425L12 4 6.075 7.425zM4 17.7a1.948 1.948 0 0 1-1-1.725v-7.95A1.95 1.95 0 0 1 4 6.3l7-4.025Q11.475 2 12 2t1 .275L20 6.3q.475.275.738.725.262.45.262 1v7.95a1.95 1.95 0 0 1-1 1.725l-7 4.025Q12.525 22 12 22t-1-.275z"
      />
    </g>
  </svg>
);
export default IconsDeployedCode;