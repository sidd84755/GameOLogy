import React from 'react'
import { Container, AppBar, Typography, Grow,Grid } from '@material-ui/core'
import img1 from './components/images/img1.jpg'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>GameOLogy</Typography>
        <img src={img1} alt="GameOLogy" height="400"/>
      </AppBar>
      <Grow in>
          <Container>
            <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts/>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Form/>
              </Grid>
            </Grid>
          </Container>
      </Grow>
    </Container>
  )
}

export default App
