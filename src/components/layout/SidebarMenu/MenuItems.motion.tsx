import React from 'react'
import { motion, AnimationProps, Variants } from 'framer-motion'

import { MenuItem } from './SidebarMenu.styled'

const sidebarMenuItemsVariants: Variants = {
  open_basic: { opacity: 1, y: 0, x: 0 },
  closed_basic: { opacity: 0, y: -10, x: -10 },
  open_inverted: { opacity: 1, y: 0, x: 0 },
  closed_inverted: { opacity: 0, y: -10, x: -10 },
}

interface SidebarMenuItemRelatedProps {}

type SidebarMenuItemProps = AnimationProps & SidebarMenuItemRelatedProps

const MotionMenuItem: React.FC<SidebarMenuItemProps> = motion.custom(MenuItem)

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = (
  props: SidebarMenuItemProps,
) => {
  return <MotionMenuItem variants={sidebarMenuItemsVariants} {...props} />
}
