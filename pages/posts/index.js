import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";

export default function Posts() {
    return (
        <Layout>
            <Head>
                <title>POSTS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Posts Index!</h1>
            <h2>
                <Link href="/posts/first-post">
                    <a>Go to first post</a>
                </Link>
            </h2>
        </Layout>
    );
}
