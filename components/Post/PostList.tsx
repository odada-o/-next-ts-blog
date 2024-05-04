// components/Post/PostList.tsx
import React from 'react'
import PostItem from './PostItem'

interface Post {
    id: number
    title: string
    content: string
}

interface PostListProps {
    posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div>
            <h1>Post List</h1>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostList
