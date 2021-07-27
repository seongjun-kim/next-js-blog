import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import cn from "classnames";
import { useState } from "react";

import Link from "next/link";

export default function Home() {
    const [type, setType] = useState("first");

    setTimeout(() => {
        setType("default");
    }, 2000);

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Blog.</p>
                <p>
                    Hello Hello Hi Hello{" "}
                    <a
                        className={cn({
                            [utilStyles.first]: type === "first",
                            [utilStyles.a]: type === "default",
                        })}
                        href="https://nextjs.org/learn"
                    >
                        Next.js tutorial
                    </a>
                    .
                </p>
                <p>
                    <Link href="/posts">
                        <a>Go to see my posts!</a>
                    </Link>
                </p>
            </section>
        </Layout>
    );
}
