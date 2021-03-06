import Link from "next/link";
import styled from "styled-components";

const Navbar = styled.nav`
    padding-left: 2rem;

    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gray2);
        font-family: "PT Sans", sans-serif;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

const Nav = () => {
    return (
        <Navbar>
            <Link href="/">Home</Link>
            <Link href="/popular">Popular</Link>
            <Link href="/new-product">New Product</Link>
        </Navbar>
    );
};

export default Nav;
