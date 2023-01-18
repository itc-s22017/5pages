import styles from 'styles/fir.module.css'
import { Layout, Layout2 } from 'component/first/layout'
export default function Fir () {
  return (
    <div>
      <div className={styles.gridcolumn}>
        <Layout />
        <Layout2 num={2} />
      </div>
      <div className={styles.gridcolumn}>
        <Layout2 num={3} />
        <Layout2 num={4} />
      </div>
    </div>
  )
}
