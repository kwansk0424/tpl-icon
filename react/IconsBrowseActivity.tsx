import * as React from 'react';
const IconsBrowseActivity = (props) => (
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
        d="M2 9V5q0-.824.587-1.412A1.93 1.93 0 0 1 4 3h16q.824 0 1.413.587Q22 4.176 22 5v4h-2V5H4v4zm2 9q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16v-5h2v5h16v-5h2v5q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18zm-2 3a.97.97 0 0 1-.712-.288A.97.97 0 0 1 1 20q0-.424.288-.712A.97.97 0 0 1 2 19h20q.424 0 .712.288.288.287.288.712 0 .424-.288.712A.97.97 0 0 1 22 21zm0-10V9h6q.274 0 .525.15.25.15.375.4l1.175 2.325L13.15 6.5A.97.97 0 0 1 14 6q.274 0 .525.138.25.137.375.412L16.125 9H22v2h-6.5q-.274 0-.525-.137a.86.86 0 0 1-.375-.413l-.65-1.325-3.075 5.375a.8.8 0 0 1-.375.375 1.16 1.16 0 0 1-.525.125.987.987 0 0 1-.875-.55L7.375 11z"
      />
    </g>
  </svg>
);
export default IconsBrowseActivity;