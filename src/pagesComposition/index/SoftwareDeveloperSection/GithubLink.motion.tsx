import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'
import BasicButton from 'components/buttons/BasicButton'
import Img from 'components/simpleUi/Img'
import githubIconSrc from './assets/GithubIcon.svg'

const variants: Variants = {
  inactive: {
    x: '74%',
  },
  active: {
    x: 0,
  },
  after: {
    x: 0,
  },
}

const transition: Transition = {
  type: 'tween',
  duration: 1,
}

interface GithubLinkRelatedProps {}

export type MotionGithubLinkProps = AnimationProps &
  GithubLinkRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionGithubLink: React.FC<MotionGithubLinkProps> = motion.custom(Flex)

const GithubLink: React.FC<MotionGithubLinkProps> = (
  props: MotionGithubLinkProps,
) => {
  const { href } = props
  return (
    <MotionGithubLink
      animate="inactive"
      initial="active"
      whileHover="active"
      variants={variants}
      transition={transition}
      position="absolute"
      top="lg"
      right={0}
      {...props}
    >
      <a href={href} rel="noopener noreferrer" target="_blank">
        <BasicButton as="div" p="xs" sizeVariant="small" whileHover="">
          <Img src={githubIconSrc} title="Github" pr="lg" />
          Check out my Github
        </BasicButton>
      </a>
    </MotionGithubLink>
  )
}

export default GithubLink
