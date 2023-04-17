import Link from "next/link";

export default function BlogPost(props) {
  return (
    <>
      <h1>blog/[pid]</h1>
      <Link href="/blog/123/456">Go to blog/[...slug]</Link>
      <br /><br />
      <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
    </>
  );
}

export function getServerSideProps({resolvedUrl, params}) {
  return {
    props: {
      page: 'blog/[pid]',
      resolvedUrl,
      params
    }
  }
}