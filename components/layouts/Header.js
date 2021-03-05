import Link from "next/link";
import Searcher from "../ui/Searcher";
import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>P</p>

                    <Searcher />

                    <Nav />
                </div>
                <div>
                    <p>Hey there, Diego!</p>
                    <button>Log out</button>
                    <Link href="/">Login</Link>
                    <Link href="/">Create Account</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
