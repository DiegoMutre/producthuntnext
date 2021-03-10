import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import Error404 from "../../components/layouts/404";
import firebase from "../../firebase";
import styled from "styled-components";

const ProductText = styled.h1`
    text-align: center;
    margin-top: 5rem;
`;

const ProductContainer = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

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

    if (Object.keys(product).length === 0) {
        return "Loading...";
    }

    const { comments, description, votes, name, created, imageUrl } = product;

    return (
        <Layout>
            <>{error && <Error404 />}</>
            <div className="container">
                <ProductText>{name}</ProductText>
                <ProductContainer>
                    <div>1</div>
                    <aside>2</aside>
                </ProductContainer>
            </div>
        </Layout>
    );
};

export default Product;
