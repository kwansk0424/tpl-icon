import * as React from 'react';
const IconsExclamation = (props) => (
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
        d="M12 14a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 13V6q0-.424.287-.713A.97.97 0 0 1 12 5q.424 0 .713.287Q13 5.576 13 6v7q0 .424-.287.713A.97.97 0 0 1 12 14m0 5a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 18q0-.424.287-.712A.97.97 0 0 1 12 17q.424 0 .713.288.287.287.287.712 0 .424-.287.712A.97.97 0 0 1 12 19"
      />
    </g>
  </svg>
);
export default IconsExclamation;