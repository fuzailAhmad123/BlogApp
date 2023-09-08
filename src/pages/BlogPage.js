import React, { useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom';

const BlogPage = () => {

    const [blog ,setBlog] = useState(null)
    const[relatedblog ,setRelatedBlog] = useState([]);
    const location = useLocation();
    const navigate = useNavigation();
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage