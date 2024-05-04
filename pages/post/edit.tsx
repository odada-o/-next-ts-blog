// pages/post/edit.tsx
import React from 'react'
import PostEdit from '../../components/Post/PostEdit'

interface Post {
    id: number
    title: string
    content: string
}

const PostEditPage: React.FC = () => {
    const post: Post = { id: 1, title: 'Post 1', content: 'Content 1' }

    return (
        <div>
            <h1>Edit Post</h1>
            <PostEdit post={post} />
        </div>
    )
}

export default PostEditPage
