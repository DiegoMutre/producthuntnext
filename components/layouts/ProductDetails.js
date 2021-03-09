import styled from "styled-components";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Image = styled.img`
    width: 200px;
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
        <li>
            <div>
                <div>
                    <Image src={imageUrl} alt={name} />
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div>
                        <img src="/static/img/comment.png" alt="comment-logo" />
                        <p>{comments.length} Comments</p>
                    </div>
                    <p>Posted {formatDistanceToNow(created)} ago</p>
                </div>
            </div>
            <div>
                <div>&#9650;</div>
                <p>{votes}</p>
            </div>
        </li>
    );
};

export default ProductDetails;
