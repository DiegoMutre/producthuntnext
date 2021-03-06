import Link from "next/link";
import styled from "styled-components";
import Button from "../ui/Button";
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

const UserNameContainer = styled.div`
    display: flex;
    align-items: center;
`;

const UserName = styled.p`
    margin-right: 2rem;
`;

const Separator = styled.div`
    display: flex;
    align-items: center;
`;

const Header = () => {
    return (
        <Heading>
            <HeaderContainer>
                <Separator>
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>

                    <Searcher />

                    <Nav />
                </Separator>
                <UserNameContainer>
                    <UserName>Hey there, Diego!</UserName>
                    <Button bgColor="#da552f">Log out</Button>
                    <Link href="/login">
                        <Button bgColor="#da552f">Login</Button>
                    </Link>
                    <Link href="/create-account">
                        <Button>Sign Up</Button>
                    </Link>
                </UserNameContainer>
            </HeaderContainer>
        </Heading>
    );
};

export default Header;
