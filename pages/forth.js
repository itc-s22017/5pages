import styles from 'styles/forth.module.css'
import Ul from 'component/forth/ul'

export default function Forth () {
  return (
    <div className={styles.box}>
      <h1>Prep Mart</h1>
      <ul className={styles.col3}>
        <Ul
          title='Meet' color='red' subtitle='Beef' subtitle2='Chicken'
          subtitle3='Other'
        />
        <Ul
          title='Fish' color='cyan' subtitle='Tuna' subtitle2='Shrimp'
          subtitle3='Other'
        />
        <Ul title='Vegetable' color='#ddd' subtitle='Tomato' subtitle2='Lettuce' subtitle3='Other' />
      </ul>
    </div>
  )
}
