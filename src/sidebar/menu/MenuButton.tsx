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
          <m.span
            initial={{ display: 'none', opacity: 0 }}
            animate={{ display: isOpen ? 'block' : 'none', opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >Close</m.span>
        </button>
      )
    case false:
      return (
        <m.button
          animate={{ color: ["#ff0000", "#000000"] }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          onClick={() => setIsOpen(!isOpen)}>
          <PanelLeftOpen />
        </m.button>
      )
  }
}

export default MenuButton