import { Builder } from '@builder.io/react'

export const SectionCurve = ({ fillColor, flipped }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    viewBox="0 0 1590.47 48.664"
    style={{
      transform: flipped ? 'scale(1, -1)' : 'none',
      marginBottom: flipped ? '0px' : '-21px',
      marginTop: flipped ? '-21px' : '0px',
    }}
  >
    <g id="Layer_2" data-name="Layer 2" transform="translate(-1 -2.136)">
      <g id="Layer_1" data-name="Layer 1">
        <path
          id="Path_2"
          data-name="Path 2"
          d="M1,50.24c518.5-68,1221.5-60,1590.47-.5V50.8H1Z"
          fill={fillColor}
        />
      </g>
    </g>
  </svg>
)

/* Make this a builder component */
Builder.registerComponent(SectionCurve, {
  name: 'Section Curve',
  inputs: [
    {
      name: 'fillColor',
      type: 'string',
      defaultValue: 'red',
    },
    {
      name: 'flipped',
      type: 'boolean',
      defaultValue: false,
    },
  ],
})
