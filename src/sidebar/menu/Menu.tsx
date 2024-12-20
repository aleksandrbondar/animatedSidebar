import { MENU } from "./menu.data"
import MenuItem from "./MenuItem"
import styles from "../Sidebar.module.scss"
import MenuButton from "./MenuButton"

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <MenuButton />
      {MENU.map((item) => (
        <MenuItem key={item.link} item={item} />
      ))}
    </nav>
  )
}

export default Menu