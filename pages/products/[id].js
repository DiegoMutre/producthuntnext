import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import Error404 from "../../components/layouts/404";
import firebase from "../../firebase";
import styled from "styled-components";
import { formatDistanceToNow } from "date-fns";
import { Field, InputSubmit } from "../../components/ui/Form";
import Button from "../../components/ui/Button";

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

const CommentHeading = styled.h2`
    margin: 2rem 0;
`;

const Votes = styled.p`
    text-align: center;
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

    const {
        comments,
        description,
        votes,
        name,
        created,
        imageUrl,
        url,
        company,
        creator,
    } = product;

    return (
        <Layout>
            <>{error && <Error404 />}</>
            <div className="container">
                <ProductText>{name}</ProductText>
                <ProductContainer>
                    <div>
                        <p>Posted {formatDistanceToNow(created)} ago</p>
                        <p>
                            By {creator.username} from {company}
                        </p>
                        <img src={imageUrl} alt={name} />
                        <p>{description}</p>
                        <h2>Add your comment</h2>
                        <form>
                            <Field>
                                <input type="text" name="message" />
                            </Field>
                            <InputSubmit type="submit" value="Add comment" />
                        </form>
                        <CommentHeading>Comments</CommentHeading>
                        {comments.map((comment, i) => (
                            <li key={i}>
                                <p>{comment.name}</p>
                                <p>Written by {comment.username}</p>
                            </li>
                        ))}
                    </div>
                    <aside>
                        <Button bgColor="#da552f" target="_blank" href={url}>
                            Visit URL
                        </Button>
                        <div style={{ marginTop: "5rem" }}>
                            <Votes>{votes} votes</Votes>
                            <Button>Vote</Button>
                        </div>
                    </aside>
                </ProductContainer>
            </div>
        </Layout>
    );
};

export default Product;
