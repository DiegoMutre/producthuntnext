import Layout from "../components/layouts/Layout";
import ProductDetails from "../components/layouts/ProductDetails";
import useProducts from "../hooks/useProducts";

export default function Home() {
    const { products } = useProducts("created");

    return (
        <>
            <Layout>
                <div className="products-list">
                    <div className="container">
                        <ul className="bg-white">
                            {products.map(product => (
                                <ProductDetails
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </Layout>
        </>
    );
}
