import { MENU } from "./menu.data"
import MenuItem from "./MenuItem"
import styles from "../Sidebar.module.scss"
import MenuButton from "./MenuButton"

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <MenuButton />
      {/* <button
        className={styles.toggle}
        onClick={toggleSidebar}>
        {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
      </button> */}
      {MENU.map((item) => (
        <MenuItem key={item.link} item={item} />
      ))}
    </nav>
  )
}

export default Menu