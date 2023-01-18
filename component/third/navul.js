import Li from 'component/third/navli'
import styles from 'styles/nav.module.css'
export default function Ul () {
  return (
    <>
      <ul className={styles.container}>
        <Li text='TOP' />
        <Li text='ABOUT' />
        <Li text='NEWS' />
        <Li text='LINK' />
      </ul>

    </>
  )
}
