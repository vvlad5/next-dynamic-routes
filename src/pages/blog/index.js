import Link from "next/link";

export default function Blog(props) {
  return (
    <>
      <h1>blog/index</h1>
      <Link href="/blog/123">Go to blog/[pid]</Link>
      <br /><br />
      <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
    </>
  );
}

export function getServerSideProps({resolvedUrl}) {
  return {
    props: {
      page: 'blog/index',
      resolvedUrl,
    }
  }
}