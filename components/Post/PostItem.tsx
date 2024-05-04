// components/Post/PostItem.tsx
import React from 'react'
import { useRouter } from 'next/router'

interface Post {
    id: number
    title: string
    content: string
}

interface PostItemProps {
    post: Post
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const router = useRouter()

    const handlePostClick = () => {
        router.push(`/post/${post.id}`)
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={handlePostClick}>Read more</button>
        </div>
    )
}

export default PostItem
