import { client } from '@/libs/client'

export default async function Home() {
  const { contents } = await client.get({
    endpoint: 'blogs',
  })
  return (
    <div>
      {contents.map((blog) => (
        <article key={blog.id}>{blog.title}</article>
      ))}
    </div>
  )
}
