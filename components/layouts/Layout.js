import Header from "./Header";

const layout = props => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
        </>
    );
};

export default layout;
