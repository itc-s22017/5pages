import styles from 'styles/five.module.css'
import Five from 'component/five/five'

export default function Newspaper () {
  return (
    <div className={styles.box}>
      <h1>Prep Times</h1>
      <h2>Headline</h2>
      <Five num='1' />
      <Five num='2' />

    </div>
  )
}
