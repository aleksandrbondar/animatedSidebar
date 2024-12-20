import { useAtomValue } from "jotai"
import { IMenuItem } from "./menu.data"
import { isOpenAtom } from "../../store"

const MenuItem = ({ item }: { item: IMenuItem }) => {
  const isOpen = useAtomValue(isOpenAtom)
  return (
    <a
      href={item.link}
      rel="noreferrer"
      target="_blank"
    >
      <item.icon />
      {isOpen && <span>{item.name}</span>}
    </a>
  )
}

export default MenuItem