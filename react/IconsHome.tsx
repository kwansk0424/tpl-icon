import * as React from 'react';
const IconsHome = (props) => (
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
        d="M6 19h3v-5q0-.424.287-.713A.97.97 0 0 1 10 13h4q.424 0 .713.287.287.288.287.713v5h3v-9l-6-4.5L6 10zm-2 0v-9a1.99 1.99 0 0 1 .8-1.6l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .824-.587 1.413A1.93 1.93 0 0 1 18 21h-4a.97.97 0 0 1-.713-.288A.97.97 0 0 1 13 20v-5h-2v5q0 .424-.287.712A.97.97 0 0 1 10 21H6q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 19"
      />
    </g>
  </svg>
);
export default IconsHome;