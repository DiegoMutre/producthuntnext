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
                <div>{/* Administration Menu here */}</div>
            </div>
        </header>
    );
};

export default Header;
