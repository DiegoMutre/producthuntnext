import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import Error404 from "../../components/layouts/404";
import firebase, { FirebaseContext } from "../../firebase";
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

const Comment = styled.li`
    border: 1px solid #e1e1e1;
    padding: 2rem;

    span {
        font-weight: bold;
    }
`;

const Product = () => {
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [comment, setComment] = useState({});

    const { user } = useContext(FirebaseContext);

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
        voters,
    } = product;

    const voteProduct = () => {
        if (!user) {
            return router.push("/login");
        }

        if (voters.includes(user.uid)) {
            return;
        }

        const newVoters = [...voters, user.uid];
        const newTotal = votes + 1;

        firebase.db
            .collection("products")
            .doc(id)
            .update({ votes: newTotal, voters: newVoters });

        setProduct({
            ...product,
            votes: newTotal,
            voters: newVoters,
        });
    };

    const handleChange = e => {
        setComment({ ...comment, [e.target.name]: e.target.value });
    };

    const addComment = e => {
        e.preventDefault();

        if (!user) {
            return router.push("/login");
        }

        const newComment = {
            ...comment,
            userId: user.uid,
            username: user.displayName,
        };

        const newComments = [...comments, newComment];

        firebase.db
            .collection("products")
            .doc(id)
            .update({ comments: newComments });

        setProduct({
            ...product,
            comments: newComments,
        });
    };

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
                        {user && (
                            <>
                                <h2>Add your comment</h2>
                                <form onSubmit={addComment}>
                                    <Field>
                                        <input
                                            type="text"
                                            name="message"
                                            onChange={handleChange}
                                        />
                                    </Field>
                                    <InputSubmit
                                        type="submit"
                                        value="Add comment"
                                    />
                                </form>
                            </>
                        )}
                        <CommentHeading>Comments</CommentHeading>
                        {comments.length === 0 ? (
                            "There are no comments"
                        ) : (
                            <ul>
                                {comments.map((comment, i) => (
                                    <Comment key={i}>
                                        <p>{comment.message}</p>
                                        <p>
                                            Written by
                                            <span> {comment.username}</span>
                                        </p>
                                    </Comment>
                                ))}
                            </ul>
                        )}
                    </div>
                    <aside>
                        <Button bgColor="#da552f" target="_blank" href={url}>
                            Visit URL
                        </Button>
                        <div style={{ marginTop: "5rem" }}>
                            {user && (
                                <Button onClick={voteProduct}>Vote</Button>
                            )}
                            <Votes>{votes} votes</Votes>
                        </div>
                    </aside>
                </ProductContainer>
            </div>
        </Layout>
    );
};

export default Product;
