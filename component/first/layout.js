import styles from 'styles/layout.module.css'
export function Layout () {
  return (
    <div>
      <div className={styles.box}>
        <h2>Box1</h2>
        <p>hello world hello world hello world hello world
          <br />
          <br /> hello world hello world hello world hello world hello world
        </p>
      </div>
    </div>
  )
}

export function Layout2 ({ num }) {
  return (
    <div>
      <div className={styles.box}>
        <h2>Box {num}</h2>
        <p>hello world hello world hello world hello world hello world hello world hello world hello world hello world
        </p>
      </div>
    </div>

  )
}
