import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { FirebaseContext } from "../../firebase";
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
    const { user, firebase } = useContext(FirebaseContext);

    const signOut = () => {
        firebase.logout();
    };

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
                    {user ? (
                        <>
                            <UserName>Hey there, {user.displayName}!</UserName>
                            <Button bgColor="#da552f" onClick={signOut}>
                                Log out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button bgColor="#da552f">Login</Button>
                            </Link>
                            <Link href="/create-account">
                                <Button>Sign Up</Button>
                            </Link>
                        </>
                    )}
                </UserNameContainer>
            </HeaderContainer>
        </Heading>
    );
};

export default Header;
