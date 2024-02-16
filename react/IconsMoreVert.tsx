import * as React from 'react';
const IconsMoreVert = (props) => (
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
        d="M12 20q-.825 0-1.412-.587A1.93 1.93 0 0 1 10 18q0-.824.588-1.413A1.93 1.93 0 0 1 12 16q.825 0 1.412.587Q14 17.176 14 18q0 .824-.588 1.413A1.93 1.93 0 0 1 12 20m0-6q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 12q0-.825.588-1.412A1.93 1.93 0 0 1 12 10q.825 0 1.412.588Q14 11.175 14 12t-.588 1.412A1.93 1.93 0 0 1 12 14m0-6q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 6q0-.824.588-1.412A1.93 1.93 0 0 1 12 4q.825 0 1.412.588Q14 5.175 14 6q0 .824-.588 1.412A1.93 1.93 0 0 1 12 8"
      />
    </g>
  </svg>
);
export default IconsMoreVert;