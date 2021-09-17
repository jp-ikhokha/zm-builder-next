import styles from './RowBreaker.module.scss'
import { Builder } from '@builder.io/react'

export const RowBreaker = ({ col1Text, col2Text, col3Text }) => (
  <div className={styles.rowBreaker_Block}>
    <div className={styles.rowBreaker_Block__item}>{col1Text}</div>
    <div className={styles.rowBreaker_Block__line}></div>
    <div className={styles.rowBreaker_Block__item}>{col2Text}</div>
    <div className={styles.rowBreaker_Block__line}></div>
    <div className={styles.rowBreaker_Block__item}>{col3Text}</div>
  </div>
)

/* Make this a builder component */
Builder.registerComponent(RowBreaker, {
  name: 'Row Breaker',
  inputs: [
    {
      name: 'col1Text',
      type: 'string',
      defaultValue: 'CONVENIENT',
    },
    {
      name: 'col2Text',
      type: 'string',
      defaultValue: 'MIND-BODY APPROACH',
    },
    {
      name: 'col3Text',
      type: 'string',
      defaultValue: 'PERSONALISED',
    },
  ],
})
