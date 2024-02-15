import * as React from 'react';
const IconsCollectionsBookmark = (props) => (
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
        d="M8 16h12V4h-2v6.125q0 .3-.25.45t-.5-.025l-1.225-.725q-.25-.15-.537-.15a.9.9 0 0 0-.513.15l-1.225.725q-.275.175-.512.025a.5.5 0 0 1-.238-.45V4H8zm0 2q-.824 0-1.412-.587A1.93 1.93 0 0 1 6 16V4q0-.824.588-1.412A1.93 1.93 0 0 1 8 2h12q.824 0 1.413.587Q22 3.176 22 4v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18zm-4 4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 20V7q0-.424.288-.713A.97.97 0 0 1 3 6q.424 0 .712.287Q4 6.576 4 7v13h13q.424 0 .712.288.288.287.288.712 0 .424-.288.712A.97.97 0 0 1 17 22z"
      />
    </g>
  </svg>
);
export default IconsCollectionsBookmark;
