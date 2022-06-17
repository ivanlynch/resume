import React from "react";

export default function Rombo() {
  return (
    <svg
      width="355"
      height="460"
      viewBox="0 0 355 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_5_29)">
        <rect
          x="108.324"
          y="315.608"
          width="288"
          height="288"
          transform="rotate(-56.1857 108.324 315.608)"
          stroke="#1F2937"
          strokeWidth="12"
        />
        <rect
          x="118.024"
          y="364.658"
          width="288"
          height="288"
          transform="rotate(-56.1857 118.024 364.658)"
          fill="#F43F5E"
          stroke="#1F2937"
          strokeWidth="12"
        />
        <rect
          x="127.723"
          y="413.708"
          width="288"
          height="288"
          transform="rotate(-56.1857 127.723 413.708)"
          stroke="#1F2937"
          strokeWidth="12"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_5_29"
          x="0"
          y="0"
          width="635.604"
          height="714.305"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="32" />
          <feGaussianBlur stdDeviation="50" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5_29"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5_29"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
