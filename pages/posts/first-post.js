import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h3>Title: The first.</h3>
            Tristique senectus et netus et malesuada fames ac turpis. Ridiculous
            mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis
            nunc sed id semper. Egestas tellus rutrum tellus pellentesque.
            Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis
            blandit turpis cursus in hac habitasse platea dictumst quisque. Eros
            donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor
            consequat id porta nibh. Adipiscing elit duis tristique sollicitudin
            nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut
            tellus elementum sagittis vitae et leo. Arcu non odio euismod
            lacinia at quis risus sed vulputate.
            <h4>
                <Link href="/posts">
                    <a>Back to posts</a>
                </Link>
            </h4>
        </Layout>
    );
}
