import * as React from 'react';
const IconsArrowForwardIos = (props) => (
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
        d="m14.475 12-7.35-7.35a1.17 1.17 0 0 1-.363-.888 1.26 1.26 0 0 1 .388-.887q.375-.375.887-.375.513 0 .888.375l7.675 7.7q.3.3.45.675t.15.75-.15.75-.45.675l-7.7 7.7q-.375.374-.875.363a1.25 1.25 0 0 1-.875-.388 1.21 1.21 0 0 1-.375-.888q0-.512.375-.887z"
      />
    </g>
  </svg>
);
export default IconsArrowForwardIos;
