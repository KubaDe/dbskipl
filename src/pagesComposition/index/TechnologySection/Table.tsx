import styled from 'styled-components'

import Grid from 'components/simpleUi/Grid'

import inject from 'hoc/inject'

const Table = inject(Grid, {
  gridTemplateColumns: { _: '1fr', md: 'repeat(4, 1fr)' },
  gridTemplateRows: { _: 'repeat(4, 1fr)', md: '1fr' },
  minWidth: {_: '100%', md: '900px'},
  maxWidth: {_: 'none', md: '1500px'},
  pb: { _: '3xl', md: '150px' },
})

const StyledTable = styled(Table)`
  flex-grow: 1;
  position: relative;
`

export default StyledTable
