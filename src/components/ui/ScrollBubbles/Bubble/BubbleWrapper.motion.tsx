import React from 'react';
import { motion, AnimationProps, MotionProps } from 'framer-motion';

import Box, { BaseBoxProps } from 'components/simpleUi/Box';

interface BubbleWrapperRelatedProps {}

export type MotionBubbleWrapperProps = AnimationProps &
  BubbleWrapperRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionBubbleWrapper: React.FC<MotionBubbleWrapperProps> = motion.custom(
  Box,
);

const BubbleWrapper: React.FC<MotionBubbleWrapperProps> = (
  props: MotionBubbleWrapperProps,
) => {
  const {} = props;
  return (
    <MotionBubbleWrapper
      {...props}
    />
  );
};

export default BubbleWrapper;
