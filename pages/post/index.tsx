// pages/post/index.tsx
import React from 'react'
import PostList from '../../components/Post/PostList'
import { Post } from '../../types'

// 가짜 데이터로 초기화된 포스트 배열
const posts: Post[] = [
    { id: 1, title: 'Post 1', content: 'Content 1', author: 'Author 1', date: '2024-05-06' },
    { id: 2, title: 'Post 2', content: 'Content 2', author: 'Author 2', date: '2024-05-07' },
    { id: 3, title: 'Post 3', content: 'Content 3', author: 'Author 3', date: '2024-05-08' },
]

const PostPage: React.FC = () => {
    return (
        <div>
            <h1>Post</h1>
            {/* 포스트 목록 컴포넌트를 렌더링 */}
            <PostList posts={posts} />
        </div>
    )
}

export default PostPage
