// components/Post/PostDetail.tsx
import React from 'react'

interface Post {
    id: number
    title: string
    content: string
}

interface PostDetailProps {
    post: Post
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

export default PostDetail
