import { PostInterface } from "@/libs/types"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Link from "next/link"

const SERVER_URL = 'https://portfolio-api-drf-d6a306e8536f.herokuapp.com'


export default async function Detail({ params }: { params: { id: string } }) {
    async function getPost (id: string): Promise<PostInterface> {
        const res = await fetch(`${SERVER_URL}/api/posts/${params.id}`, { next: { revalidate: 60 } })
        if(!res.ok) {
          throw new Error('Error')
        }
        return res.json()
    }
    const post = await getPost(params.id)

    return (
        <div>
            <Header />
            <div className="flex justify-center mt-8">
                <div className="w-6/12 border rounded-lg shadow-lg flex flex-col px-10 py-8">
                    <h1 className="border-b border-b-slate-300 text-3xl mb-8">{ post.title }</h1>
                    <div className="flex mb-6">
                        <p className="mr-4">投稿日: { post.created_at }</p>
                        <p>更新日: { post.updated_at }</p>
                    </div>
                    <div className="text-xl">
                        <p>{ post.content }</p>
                        <p className="my-6">自信: {post.skill_level}/5</p>
                        <Link href='/' className="hover:text-blue-900 hover:underline text-blue-700">投稿一覧に戻る</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}