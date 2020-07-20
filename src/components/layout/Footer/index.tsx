import React from 'react'
import Link from 'next/link'
import inject from 'hoc/inject'

import Flex from 'components/simpleUi/Flex'
import Text from 'components/simpleUi/Text'
import Img from 'components/simpleUi/Img'
import IconButton from 'components/buttons/IconButton'

import githubIconSrc from './assets/GithubIcon.svg'
import facebookIconSrc from './assets/FacebookIcon.svg'
import instagramIconSrc from './assets/InstagramIcon.svg'
import linkedinIconSrc from './assets/LinkedinIcon.svg'

import {
  SectionContent,
  SectionLayout,
} from 'components/layout/buildingBlocks/SectionContent'

const Column = inject(Flex, {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexGrow: 1,
  color: 'inverted',
  px: { _: 0, md: 'lg' },
  my: { _: 'lg', md: 0 },
})

const ListItem = inject(Text, {
  fontSize: { _: 'h4', md: 'paragraph' },
  as: 'p',
  display: 'block',
  my: 'xs',
})

const SocialButton = inject(IconButton, {
  type: 'primary',
  mx: { _: 'md', md: 'sm', lg: 'md' },
  as: 'a',
  display: 'block',
  rel: 'noopener noreferrer',
  target: '_blank',
})

const Footer: React.FC = () => {
  return (
    <SectionLayout
      backgroundColor="black"
      borderTop="primary"
      borderTopColor="inverted"
      minHeight="300px"
    >
      <SectionContent my={{ _: '2xl', md: 0 }}>
        <Column>
          <Text
            display="block"
            fontSize={{ _: 'h2', md: 'h4', lg: 'h3' }}
            mb="md"
          >
            Jakub Dębski
          </Text>
          <Text
            display="block"
            fontSize='h5'
            mb="md"
            textAlign='center'
          >
            Jakub Dębski - Dbski Software
          </Text>
          <Text
            display="block"
            fontSize='h5'
            mb="md"
          >
            NIP: 9562360777
          </Text>
          <Text
            display="block"
            fontSize={{ _: 'h4', md: 'h5', lg: 'h4' }}
            as="p"
          >
            <a
              href="mailto:hello@dbski.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              hello@dbski.pl
            </a>
          </Text>
        </Column>
        <Column>
          <ListItem>
            <Link href="/" passHref>
              <a title="About me site">About me</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/software" passHref>
              <a title="Software site">Software</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/projects" passHref>
              <a title="Projects">Software</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/photography" passHref>
              <a title="Photography site">Photography</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/contact" passHref>
              <a title="Contact site">Contact</a>
            </Link>
          </ListItem>
        </Column>
        <Column flexGrow={3} flexDirection="row">
          <SocialButton
            icon={<Img src={githubIconSrc} title="Github" />}
            href="https://github.com/kubade/"
            title="Github"
          />
          <SocialButton
            icon={<Img src={facebookIconSrc} title="Facebook" />}
            href="https://www.facebook.com/qbs1994/"
            title="Facebook"
          />
          <SocialButton
            icon={<Img src={instagramIconSrc} title="Instagram" />}
            href="https://instagram.com/dbski.j/"
            title="Instagram"
          />
          <SocialButton
            icon={<Img src={linkedinIconSrc} title="LinkedIn" />}
            href="https://www.linkedin.com/in/jakub-dębski-01473ab9"
            title="LinkedIn"
          />
        </Column>
      </SectionContent>
    </SectionLayout>
  )
}

export default Footer
