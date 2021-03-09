import { useContext, useEffect, useState } from "react";
import Layout from "../components/layouts/layout";
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
                <h1>Init</h1>
            </Layout>
        </>
    );
}
