import { useState } from 'react'
import Layout from '@/components/Layout'
import FeaturedPost from '@/components/FeaturedPost'
import CardPost from '@/components/CardPost'
import Container from '@/components/Container'
import mockPosts from '@/utils/posts.json'
import Head from 'next/head'

export default function Home() {
  const [posts, setPosts] = useState(mockPosts)

  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {posts.map((post) => (
            <CardPost key={post.id} {...post} />
          ))}
        </div>
      </Container>
    </Layout>
  )
} 