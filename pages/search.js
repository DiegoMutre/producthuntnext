import Layout from "../components/layouts/Layout";
import { useRouter } from "next/router";

const Search = () => {
    const {
        query: { q },
    } = useRouter();

    return (
        <>
            <Layout>
                <h1>Search</h1>
            </Layout>
        </>
    );
};

export default Search;
