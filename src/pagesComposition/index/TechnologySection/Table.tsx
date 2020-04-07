import styled from 'styled-components'

import Grid from 'components/simpleUi/Grid'

import inject from 'hoc/inject'

const Table = inject(Grid, {
  gridTemplateColumns: { _: '1fr', lg: 'repeat(4, 1fr)' },
  gridTemplateRows: { _: 'repeat(4, 1fr)', lg: '1fr' },
  minWidth: { _: '100%', lg: '900px' },
  maxWidth: { _: 'none', lg: '1500px' },
  pb: { _: '3xl', lg: '150px' },
})

const StyledTable = styled(Table)`
  flex-grow: 1;
  position: relative;
`

export default StyledTable
