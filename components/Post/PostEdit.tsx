// components/Post/PostEdit.tsx
import React from 'react'

interface Post {
    id: number
    title: string
    content: string
}

interface PostEditProps {
    post: Post
}

const PostEdit: React.FC<PostEditProps> = ({ post }) => {
    return (
        <div>
            <h1>Edit Post</h1>
            <input type="text" value={post.title} />
            <textarea value={post.content} />
            <button>Save</button>
        </div>
    )
}

export default PostEdit
