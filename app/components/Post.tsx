import { PostInterface } from "@/libs/types"
import Link from "next/link"

interface Props {
    post: PostInterface
}

export const Post = ({ post }: Props) => {
    const text = post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content

    return (
        <div className="border inline-block px-12 py-5 rounded-md shadow-md mx-12 my-2 w-5/12">
            <div className="flex items-center mb-4">
                <Link href={`/${post.id}`} className="text-3xl hover:underline">{ post.title }</Link>
            </div>
            <div className="flex mb-2">
                <p className="mr-4">投稿日: { post.created_at }</p>
                <p>更新日: { post.updated_at }</p>
            </div>
            <div className="mb-2">
                <p className="inline">{ text }</p>
                <Link
                    href={`/${post.id}`}
                    className="inline-block text-blue-700 hover:text-blue-900 hover:underline">詳細ページへ</Link>
            </div>
            <p className="mb-1">自信: {post.skill_level}/5</p>
        </div>
    )
}