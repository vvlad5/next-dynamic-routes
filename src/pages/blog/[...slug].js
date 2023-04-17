import Link from "next/link";

export default function BlogSlug(props) {
  return (
    <>
      <h1>blog/[...slug]</h1>
      <Link href="/blog">Go to blog</Link>
      <br /><br />
      <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
    </>
  )
}

export function getServerSideProps({resolvedUrl, params}) {
  return {
    props: {
      page: 'blog/[...slug]',
      resolvedUrl,
      params
    }
  }
}