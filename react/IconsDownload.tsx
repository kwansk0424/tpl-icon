import * as React from 'react';
const IconsDownload = (props) => (
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
        d="m12 16-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-3h2v3h12v-3h2v3q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20z"
      />
    </g>
  </svg>
);
export default IconsDownload;