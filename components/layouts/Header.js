import Link from "next/link";
import styled from "styled-components";
import Searcher from "../ui/Searcher";
import Nav from "./Nav";

const Heading = styled.header`
    border-bottom: 2px solid var(--gray3);
    padding: 1rem 0;
`;

const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: "Roboto Slab", serif;
    margin-right: 2rem;
`;

const Header = () => {
    return (
        <Heading>
            <HeaderContainer>
                <div>
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>

                    <Searcher />

                    <Nav />
                </div>
                <div>
                    <p>Hey there, Diego!</p>
                    <button>Log out</button>
                    <Link href="/">Login</Link>
                    <Link href="/">Create Account</Link>
                </div>
            </HeaderContainer>
        </Heading>
    );
};

export default Header;
