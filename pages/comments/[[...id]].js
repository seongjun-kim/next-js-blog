import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";

export async function getStaticPaths() {
    return {
        paths: [
            // { params: { id: ["secret", "1"] } },
            // { params: { id: ["secret", "2"] } },
        ],
        fallback: true,
    };
}

export function getStaticProps({ params }) {
    const slugs = params.id || [];
    return {
        props: {
            slugs,
        },
    };
}

const Comment = ({ slugs }) => {
    const router = useRouter();
    // const id = router.query.id || []; // getStatic~ 없이 router 활용한 방식

    return (
        <Layout>
            {router.isFallback ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Head>
                        <title>COMMENTS</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    {/* <h1>id: {id.join("/")}</h1> */}
                    <h1>path: {slugs.join("/")}</h1>
                    <h3>This page is served by dynamic routes.</h3>
                    <h2>
                        <Link href="/comments/precedence">
                            <a>Go to precedence page!</a>
                        </Link>
                    </h2>
                    <h2>
                        <Link href="/comments/a/1234">
                            <a>Go to undefined page: /coments/a/1234</a>
                        </Link>
                    </h2>
                </>
            )}
        </Layout>
    );
};

export default Comment;
