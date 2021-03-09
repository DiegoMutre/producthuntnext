import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import Error404 from "../../components/layouts/404";
import firebase from "../../firebase";

const Product = () => {
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);

    const router = useRouter();
    const {
        query: { id },
    } = router;

    useEffect(() => {
        if (id) {
            const getProduct = async () => {
                const productQuery = await firebase.db
                    .collection("products")
                    .doc(id);
                const product = await productQuery.get();
                if (product.exists) {
                    setProduct(product.data());
                    return;
                }
                setError(true);
            };
            getProduct();
        }
    }, [id]);

    return (
        <Layout>
            <>{error && <Error404 />}</>
            <h1>From {id}</h1>
        </Layout>
    );
};

export default Product;
