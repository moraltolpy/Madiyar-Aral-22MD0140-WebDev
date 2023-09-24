import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Blog({ blog, onDelete }) {
    return (
        <Paper elevation={3} className="blog tw-p-2 tw-relative">
            <Typography variant="body1" className="tw-pb-2">{blog.content}</Typography>
            <Button variant="contained" color="secondary" onClick={() => onDelete(blog.id)}>
                Delete
            </Button>
        </Paper>
    );
}

export default Blog;
