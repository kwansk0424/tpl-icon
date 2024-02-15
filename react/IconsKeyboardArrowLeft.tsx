import * as React from 'react';
const IconsKeyboardArrowLeft = (props) => (
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
      <path fill="#000" d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6z" />
    </g>
  </svg>
);
export default IconsKeyboardArrowLeft;
