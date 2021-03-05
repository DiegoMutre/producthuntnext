import Header from "./Header";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
:root {
    --gray: #3d3d3d;
    --gray2: #6f6f6f;
    --gray3: #e1e1e1;
    --orange: #da552f;
    }
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *, *:after, *:before {
        box-sizing: inherit;
    }

    body {
        font-size: 1.6rem;
        font-family : 'PT Sans', sans-serif;
    }

    h1, h2, h3 {
        margin: 0 0 2rem 0;
        line-height: 1.5;
    }

    h1, h2 {
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
    }

    h3 {
        font-family : 'PT Sans', sans-serif;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }
`;

const layout = props => {
    return (
        <>
            <GlobalStyle />
            <Head>
                <title>Product Hunt Firebase and Next,js</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
                    crossOrigin="anonymous"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <main>{props.children}</main>
        </>
    );
};

export default layout;
