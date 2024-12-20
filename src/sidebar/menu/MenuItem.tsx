import { useAtomValue } from "jotai"
import { IMenuItem } from "./menu.data"
import { isOpenAtom } from "../../store"
import { m } from 'framer-motion'

const MenuItem = ({ item }: { item: IMenuItem }) => {
  const isOpen = useAtomValue(isOpenAtom)
  return (
    <a
      href={item.link}
      rel="noreferrer"
      target="_blank"
    >
      <item.icon />
      {isOpen &&
        <m.span
          initial={{ display: 'none', opacity: 0 }}
          animate={{ display: isOpen ? 'block' : 'none', opacity: isOpen ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >{item.name}</m.span>}
    </a>
  )
}

export default MenuItem