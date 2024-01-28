import { useState, useEffect } from "react";
import axios from 'axios';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getData = async () => {        
            const response = await axios.get('https://api.slingacademy.com/v1/sample-data/blog-posts?limit=30');
            setBlogs(response.data.blogs.map(blog => ({ ...blog, active: false })));
        }
        getData();
    }, []);

    const handleReadMoreClick = (index) => {
        setBlogs((prevBlogs) => {
            const newBlogs = [...prevBlogs];
            newBlogs[index].active = true;
            return newBlogs;
        });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 py-3">
            {blogs.map((blog, index) => (
                <div className="px-2 pb-3" key={blog.id}>
                    <img src={blog.photo_url} alt={blog.id} />
                    <h4 className="text-2xl py-2">{blog.title}</h4>
                    <p className="text-sm">
                        {blog.active ? blog.content_text : blog.content_text.substring(0, 300)}
                        {!blog.active && (
                            <a
                                className="text-blue-600 cursor-pointer"
                                onClick={() => handleReadMoreClick(index)}
                            >
                                ...read more
                            </a>
                        )}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Blogs;
