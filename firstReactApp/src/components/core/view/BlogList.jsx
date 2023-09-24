import React from 'react';
import Grid from '@mui/material/Grid';
import Blog from './Blog';

function BlogList({ blogs, onDelete }) {
    return (
        <Grid container spacing={2}>
            {blogs.map((blog) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
                    <Blog blog={blog} onDelete={onDelete} />
                </Grid>
            ))}
        </Grid>
    );
}

export default BlogList;
