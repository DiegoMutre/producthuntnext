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
                <div></div>
                <div>
                    <h1>{name}</h1>
                </div>
            </div>
            <div></div>
        </li>
    );
};

export default ProductDetails;
