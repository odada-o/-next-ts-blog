// components/Post/PostNew.tsx
import React from 'react'

const PostNew: React.FC = () => {
    return (
        <div>
            <h1>New Post</h1>
            <input type="text" placeholder="Title" />
            <textarea placeholder="Content" />
            <button>Save</button>
        </div>
    )
}

export default PostNew
