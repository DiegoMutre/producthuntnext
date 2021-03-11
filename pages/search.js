import Layout from "../components/layouts/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductDetails from "../components/layouts/ProductDetails";

const Search = () => {
    const {
        query: { q },
    } = useRouter();

    const { products } = useProducts("votes");

    const [result, setResult] = useState([]);

    useEffect(() => {
        const search = q.toLowerCase();
        const filter = products.filter(
            product =>
                product.name.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search)
        );
        setResult(filter);
    }, [q, products]);

    return (
        <>
            <Layout>
                <div className="products-list">
                    <div className="container">
                        <ul className="bg-white">
                            {result.map(product => (
                                <ProductDetails
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </ul>
                    </div>
                </div>{" "}
            </Layout>
        </>
    );
};

export default Search;
