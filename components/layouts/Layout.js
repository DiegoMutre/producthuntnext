import Header from "./Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --gray: #3d3d3d;
    --gray2: #6f6f6f;
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
    }

    h1, h2, h3 {
        margin: 0 0 2rem 0;
        line-height: 1.5;
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
            <Header />
            <main>{props.children}</main>
        </>
    );
};

export default layout;
