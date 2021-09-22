import styles from './CircleImageTextBlockCTA.module.scss'
import { Builder } from '@builder.io/react'
import Image from 'next/image'
import Link from 'next/link'

export const CircleImageTextBlockCTA = ({
  heading,
  excerpt,
  image = '/images/placeholder.webp',
  reverse,
  imgBgColor,
  hasLink,
  zmButton,
}) => {
  return (
    <>
      <div
        className={styles.circleImageTextBlockCTA__Container}
        style={{
          flexDirection: reverse ? 'row-reverse' : 'row',
        }}
      >
        <div className={styles.circleImageTextBlockCTA__Container__textBlock}>
          <div
            className={
              styles.circleImageTextBlockCTA__Container__textBlock__content
            }
          >
            <h2>{heading}</h2>
            <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
          </div>
          {hasLink && (
            <Link
              href={zmButton.linkUrl !== undefined ? zmButton.linkUrl : '/'}
            >
              <a className={`zmbtn btn-${zmButton.variant}`}>
                {zmButton.linkLabel}
              </a>
            </Link>
          )}
        </div>
        <div className={styles.circleImageTextBlockCTA__Container__mediaBlock}>
          <div
            className={styles.imageBg}
            style={{
              backgroundColor: imgBgColor,
            }}
          ></div>

          <div
            className={styles.theImage}
            style={{
              left: reverse ? '24px' : '4px',
            }}
          >
            <Image src={image} alt={heading} layout="fill" quality={100} />
          </div>
        </div>
      </div>
    </>
  )
}

/* Make this a builder component */
Builder.registerComponent(CircleImageTextBlockCTA, {
  name: 'Circle Image +  Text Block',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      defaultValue: 'Weekly Health Plan Personal To You',
    },
    {
      name: 'excerpt',
      type: 'richText',
      defaultValue: '<b>This text is bold</b>',
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'png'],
    },
    {
      name: 'imgBgColor',
      type: 'color',
      defaultValue: '#45afff',
    },
    {
      name: 'reverse',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'reverse',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'hasLink',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'zmButton',
      type: 'object',
      showIf: (options) => {
        return options.get('hasLink')
      },
      subFields: [
        {
          name: 'linkLabel',
          type: 'string',
          defaultValue: 'link label',
          required: true,
        },
        {
          name: 'linkUrl',
          type: 'url',
          defaultValue: '/',
          required: true,
        },
        {
          name: 'variant',
          type: 'string',
          defaultValue: 'primary',
          enum: ['primary', 'secondary'],
        },
      ],
    },
  ],
})
