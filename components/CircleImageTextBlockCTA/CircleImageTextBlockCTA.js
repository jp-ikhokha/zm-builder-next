import styles from './CircleImageTextBlockCTA.module.scss'
import { Builder } from '@builder.io/react'
import Image from 'next/image'

export const CircleImageTextBlockCTA = ({
  heading,
  excerpt,
  image = '/images/placeholder.webp',
  reverse,
  imgBgColor,
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
            <Image
              src={image}
              alt={heading}
              layout="fill"
              width="527px"
              height="354px"
              quality={100}
            />
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
  ],
})
