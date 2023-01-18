import styles from 'styles/second.module.css'
export default function Main ({title}) {
  return (
    <div>
      <h2 className={styles.h2}>Heading {title}</h2>
      <p className={styles.p}>Content comes here. Content comes here. Content comes here.
        <br /> Content comes here. Content comes here. Content comes here.
      </p>
    </div>
  )
}
