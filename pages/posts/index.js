import Head from "next/head";

import Layout from "../../components/layout";

export default function Posts() {
    return (
        <Layout>
            <Head>
                <title>POSTS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Posts Index!</h1>
        </Layout>
    );
}
