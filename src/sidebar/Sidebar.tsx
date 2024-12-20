import Menu from "./menu/Menu"
import styles from "./Sidebar.module.scss"
import { useAtom } from "jotai"
import { isOpenAtom } from "../store"
import { m } from 'framer-motion'


const Sidebar = () => {
  const [isOpen] = useAtom(isOpenAtom)

  return (
    <m.aside className={styles.sidebar}
      initial={{ width: 64 }}
      animate={{ width: isOpen ? 224 : 64 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Menu />
    </m.aside>
  )
}

export default Sidebar
