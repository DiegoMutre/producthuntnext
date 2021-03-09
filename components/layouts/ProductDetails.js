import styled from "styled-components";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from "next/link";

const Product = styled.li`
    padding: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
`;

const ProductDescriptions = styled.div`
    flex: 0 1 600px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 2rem;
`;

const TextDescription = styled.p`
    font-size: 1.6rem;
    margin: 0;
    color: #888;
`;

const Image = styled.img`
    width: 200px;
`;

const Title = styled.a`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    color: #000;

    &:hover {
        cursor: pointer;
    }
`;

const Comments = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        border: 1px solid #e1e1e1;
        padding: 0.3rem 1rem;
        margin-right: 2rem;
    }

    img {
        width: 2rem;
        margin-right: 2rem;
    }

    p {
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        &:last-of-type {
        }
        margin: 0;
    }
`;

const Votes = styled.div`
    flex: 0 0 auto;
    text-align: center;
    border: 1px solid #e1e1e1;
    padding: 1rem 3rem;

    div {
        font-size: 2rem;
    }

    p {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
    }
`;

const ProductDetails = ({ product }) => {
    const {
        id,
        comments,
        description,
        url,
        votes,
        name,
        created,
        company,
        imageUrl,
    } = product;

    return (
        <Product>
            <ProductDescriptions>
                <div>
                    <Image src={imageUrl} alt={name} />
                </div>
                <div>
                    <Title href="#">{name}</Title>
                    <TextDescription>{description}</TextDescription>
                    <Comments>
                        <div>
                            <img
                                src="/static/img/comment.png"
                                alt="comment-logo"
                            />
                            <p>{comments.length} Comments</p>
                        </div>
                    </Comments>
                    <p>Posted {formatDistanceToNow(created)} ago</p>
                </div>
            </ProductDescriptions>
            <Votes>
                <div>&#9650;</div>
                <p>{votes}</p>
            </Votes>
        </Product>
    );
};

export default ProductDetails;
