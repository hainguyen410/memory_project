import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPosts } from './action/posts.js'
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import memories from './images/memories.png';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
    <Container maxWidth='lg'>
      <AppBar sx={{
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }} 
        position='static' 
        color='inherit'>
        <Typography sx={{color: 'rgba(0,183,255, 1)',}} variant='h2' align='center'>Memories</Typography>
        <img marginleft="15px" src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
              <Form />
          </Grid>
        </Container>
      </Grow>
    </Container>


  );
}

export default App;
