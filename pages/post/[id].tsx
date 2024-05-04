// pages/post/[id].tsx
import React from 'react'
import { useRouter } from 'next/router'
import PostDetail from '../../components/Post/PostDetail'

interface Post {
    id: number
    title: string
    content: string
}

const PostDetailPage: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    // 임시 데이터
    const posts: Post[] = [
        { id: 1, title: 'Post 1', content: 'Content 1' },
        { id: 2, title: 'Post 2', content: 'Content 2' },
        { id: 3, title: 'Post 3', content: 'Content 3' },
    ]

    // 해당 id에 해당하는 포스트 찾기
    const post = posts.find((post) => post.id === Number(id))

    if (!post) {
        return <div>Post not found</div>
    }

    // 수정하기, 삭제하기 버튼 추가해줘

    return (
        <div>
            <h1>Post Detail</h1>
            <PostDetail post={post} />
            <button onClick={() => router.push('/post')}>Back</button>
            {/* 수정하기, 삭제하기 버튼 */}
            <button onClick={() => router.push(`/post/${post.id}/edit`)}>Edit</button>
            <button onClick={() => alert('Delete')}>Delete</button>
        </div>
    )
}

export default PostDetailPage
