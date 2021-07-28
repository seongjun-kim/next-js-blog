import Head from "next/head";

import Layout from "../../components/layout";

export default function Precedence() {
    return (
        <Layout>
            <Head>
                <title>Caveats</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Precedence!</h1>
            <h4>
                Predefined routes take precedence over dynamic routes, <br />
                and dynamic routes over catch all routes.
            </h4>
            <br />
            <h3>페이지가 정의되어있다면? 다이나믹 라우트 규칙보다 우선!</h3>
            <h6>
                더블 브래킷과 '...'을 활용한(ex: [[...id]]) 다이나믹 라우트
                규칙이
                <br />
                '/coments' 이하의 모든 라우팅을 지원하더라도
                <br />
                별도로 지정되어있는(predefined) 페이지가 있을 경우에는 해당
                페이지 관련 파일이 우선!
            </h6>
        </Layout>
    );
}
