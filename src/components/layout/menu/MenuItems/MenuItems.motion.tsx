import React from 'react'
import { motion, AnimationProps, Variants } from 'framer-motion'

import { MenuItem } from './MenuItems.styled'

const BarMenuItemsVariants: Variants = {
  open_basic: { opacity: 1, y: 0, x: 0 },
  closed_basic: { opacity: 0, y: -10, x: -10 },
  open_inverted: { opacity: 1, y: 0, x: 0 },
  closed_inverted: { opacity: 0, y: -10, x: -10 },
}

interface BarMenuItemRelatedProps {}

type BarMenuItemProps = AnimationProps & BarMenuItemRelatedProps

const MotionMenuItem: React.FC<BarMenuItemProps> = motion.custom(MenuItem)

export const BarMenuItem: React.FC<BarMenuItemProps> = (
  props: BarMenuItemProps,
) => {
  return <MotionMenuItem variants={BarMenuItemsVariants} {...props} />
}
