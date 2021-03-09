import { useContext, useEffect, useState } from "react";
import Layout from "../components/layouts/layout";
import ProductDetails from "../components/layouts/ProductDetails";
import firebase from "../firebase";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            firebase.db
                .collection("products")
                .orderBy("created", "desc")
                .onSnapshot(handleSnapshot);
        };

        function handleSnapshot(snapshot) {
            const products = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });

            setProducts(products);
        }

        getProducts();
    }, []);

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
