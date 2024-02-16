import * as React from 'react';
const IconsNotepadCustom = (props) => (
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
        fillRule="evenodd"
        d="M3.588 21.413Q4.175 22 5 22h14q.824 0 1.413-.587Q21 20.825 21 20V6q0-.824-.587-1.412A1.93 1.93 0 0 0 19 4h-1V2h-2v2H8V2H6v2H5q-.824 0-1.412.588A1.93 1.93 0 0 0 3 6v14q0 .824.587 1.413M19 20H5V6h14v14m-2-10H7V8h10zM7 12v2h10v-2zm0 4v2h7v-2z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default IconsNotepadCustom;