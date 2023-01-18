import Header from 'component/second/header'
import Footer from 'component/second/footer'
import Main from 'component/second/secmain'
import styles from 'styles/second.module.css'
export default function Second () {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Main />
        <Main title={2} />
      </div>
      <Footer />
    </>
  )
}
