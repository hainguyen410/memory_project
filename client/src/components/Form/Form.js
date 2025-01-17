import React, {useState} from 'react';
import "./styles.css"
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux';

import { createPosts } from '../../action/posts';

const Form = () => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tag: '', selectedFile: ''});
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPosts(postData));
    }

    const clear = () => {

    }
    return (

        <Paper className='paper'>
            <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Memory</Typography>
                <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({...postData ,creator: e.target.value})}/>
                <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({...postData ,title: e.target.value})}/>
                <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => setPostData({...postData ,message: e.target.value})}/>
                <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({...postData ,tags: e.target.value})}/>

                <div className='fileInput'>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64}) }/>
                </div>

                <Button className='buttonSubmit' variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;