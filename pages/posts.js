import Layout from "@/components/Layout"
import Container from "@/components/Container"
import mockPosts from '@/utils/posts.json'
import CardPost from "@/components/CardPost"
import { useState } from "react"
import SectionHeader from "@/components/SectionHeader"

export default function Posts() {
    const [posts, setPosts] = useState(mockPosts)

    return (
        <Layout>
            <Container>
                <SectionHeader>UI Design</SectionHeader>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    {posts.map((post) => (
                        <CardPost key={post.id} {...post} />
                    ))}
                </div>
            </Container>
        </Layout>
    )
}