import styles from './CircleLeftMediaRight.module.scss'
import { Builder } from '@builder.io/react'

export const CircleLeftMediaRight = ({ heading, excerpt, videoEmbed }) => {
  return (
    <>
      <div className={styles.circleLeftMediaRight__Container}>
        <div className={styles.circleLeftMediaRight__Container__leftBlock}>
          <div
            className={
              styles.circleLeftMediaRight__Container__leftBlock__content
            }
          >
            <h2>{heading}</h2>
            <p>{excerpt}</p>
          </div>
        </div>
        <div className={styles.circleLeftMediaRight__Container__rightBlock}>
          <div
            className={
              styles.circleLeftMediaRight__Container__rightBlock__media
            }
            dangerouslySetInnerHTML={{ __html: videoEmbed }}
          ></div>
        </div>
      </div>
    </>
  )
}

/* Make this a builder component */
Builder.registerComponent(CircleLeftMediaRight, {
  name: 'Circle Left Media Right',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      defaultValue:
        "The UK's first Holistic Heart Clinic focused on Rehabilitation and Prevention",
    },
    {
      name: 'excerpt',
      type: 'string',
      defaultValue:
        'Taking a new approach to medical care by combining the safety of modern medicine and the comfort of holistic practices delivered by our in-house clinical nurse specialists',
    },
    {
      name: 'videoEmbed',
      type: 'string',
      defaultValue:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/dH9L4B516kI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
})
