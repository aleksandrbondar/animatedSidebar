import { Activity, Award, Home, LucideIcon, Settings, Users } from "lucide-react"

export interface IMenuItem {
  icon: LucideIcon
  name: string
  link: string
}

export const MENU = [{
  icon: Home,
  name: 'Home',
  link: '/'
},
{
  icon: Users,
  name: 'Users',
  link: '/users'
}, {
  icon: Activity,
  name: 'Activity',
  link: '/activity'
},
{
  icon: Award,
  name: 'Achievements',
  link: '/achievements'
}, {
  icon: Settings,
  name: 'Settings',
  link: '/settings'
}
]