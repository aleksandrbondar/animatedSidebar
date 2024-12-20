import { useAtom } from "jotai"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { isOpenAtom } from "../../store"
import { m } from 'framer-motion'

const MenuButton = () => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom)
  switch (isOpen) {
    case true:
      return (
        <button
          onClick={() => setIsOpen(!isOpen)}>
          <PanelLeftClose />
          <span>Close</span>
        </button>
      )
    case false:
      return (
        <m.button
          animate={{ color: ["#ff0000", "#ffffff"] }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          onClick={() => setIsOpen(!isOpen)}>
          <PanelLeftOpen />
        </m.button>
      )
  }
}

export default MenuButton