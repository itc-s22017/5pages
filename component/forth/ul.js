import styles from 'styles/forth.module.css'
export default function comp ({ title, subtitle, subtitle2, subtitle3, color }) {
  return (
    <li>
      <h2 style={{ backgroundColor: color }}>{title}</h2>
      <ul className={styles.menu}>
        <li>{subtitle}</li>
        <li>{subtitle2}</li>
        <li>{subtitle3}</li>
      </ul>
    </li>
  )
}
