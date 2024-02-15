import * as React from 'react';
const IconsLabel = (props) => (
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
        d="m21 12-4.35 6.15a1.9 1.9 0 0 1-.712.625A2 2 0 0 1 15 19H5q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 17V7q0-.824.587-1.412A1.93 1.93 0 0 1 5 5h10q.5 0 .938.225t.712.625zm-2.45 0L15 7H5v10h10z"
      />
    </g>
  </svg>
);
export default IconsLabel;
