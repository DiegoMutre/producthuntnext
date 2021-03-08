import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { FirebaseContext } from "../../firebase";

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
    const { user } = useContext(FirebaseContext);

    return (
        <Navbar>
            <Link href="/">Home</Link>
            <Link href="/popular">Popular</Link>
            {user && <Link href="/new-product">New Product</Link>}
        </Navbar>
    );
};

export default Nav;
