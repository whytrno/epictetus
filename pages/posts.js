import Layout from "@/components/Layout"
import Container from "@/components/Container"
import mockPosts from '@/utils/posts.json'
import CardPost from "@/components/CardPost"
import { useState } from "react"
import SectionHeader from "@/components/SectionHeader"
import Head from 'next/head'

export default function Posts() {
    const [posts, setPosts] = useState(mockPosts)

    return (
        <Layout>
            <Head>
                <title>Posts &mdash; Epictetus</title>
            </Head>
            <Container>
                <SectionHeader>UI Design</SectionHeader>
                {posts.length < 1 ? (
                    <div className="text-center space-y-5">
                        <h2 className="text-6xl">No result 😥</h2>
                        <p className="text-xl text-white/60 w-full md:w-6/12 mx-auto">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                        {posts.map((post) => (
                            <CardPost key={post.id} {...post} />
                        ))}
                    </div>
                )}
            </Container>
        </Layout>
    )
}