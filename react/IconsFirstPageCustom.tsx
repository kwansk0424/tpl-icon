import * as React from 'react';
const IconsFirstPageCustom = (props) => (
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
    <g fill="#000" mask="url(#prefix__a)">
      <path d="m7.8 11.7 4.6 4.6-1.4 1.4-6-6 6-6 1.4 1.4z" />
      <path d="m14.2 11.7 4.6 4.6-1.4 1.4-6-6 6-6 1.4 1.4z" />
    </g>
  </svg>
);
export default IconsFirstPageCustom;
