import * as React from 'react';
const IconsKeyboardArrowDown = (props) => (
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
      <path fill="#000" d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4z" />
    </g>
  </svg>
);
export default IconsKeyboardArrowDown;