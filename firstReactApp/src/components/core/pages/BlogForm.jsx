import React, { useState } from 'react';
import AddBlog from '../form/AddBlog';
import BlogList from '../view/BlogList';

function BlogForm(){
const [blogs, setBlogs] = useState([]);
const [counter, setCounter] = useState(0);

const addBlog = (content) => {
    const newBlog = {
        id: counter,
        content: content,
    };
    setBlogs([...blogs, newBlog]);
};

const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
};

return (
    <div className="BlogForm">
        <AddBlog onAddBlog={addBlog} />
        <BlogList blogs={blogs} onDelete={deleteBlog} />
    </div>
);
}
export default BlogForm