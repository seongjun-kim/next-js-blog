import Layout from "../components/layout";

function Error({ statusCode }) {
    return (
        <Layout>
            <h1>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : "An error occurred on client"}
            </h1>
            <h3>접속 경로를 확인해주세요!</h3>
        </Layout>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
