import React, { useRef } from 'react';
import { useIntersection } from 'react-use';

import Wrapper from './Wrapper'
import TextColumn from './TextColumn'
import PhotoColumn from './PhotoColumn'

const Section: React.FC = () => {
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    rootMargin: '-200px 0px -100px 0px',
    threshold: .2
  });
  const animationState = intersection?.isIntersecting ? 'active' : 'inactive'
  return (
    <Wrapper ref={ref}>
      <TextColumn order={{ _: 2, md: 1 }} animationState={animationState}/>
      <PhotoColumn order={{ _: 1, md: 2 }} animationState={animationState}/>
    </Wrapper>
  )
}

export default Section
