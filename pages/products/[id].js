import { useRouter } from "next/router";
import { useEffect } from "react";

const Product = () => {
    const router = useRouter();
    const {
        query: { id },
    } = router;

    useEffect(() => {
        if (id) {
            console.log("id ready");
        }
    }, [id]);

    return (
        <div>
            <h1>From Product {id}</h1>
        </div>
    );
};

export default Product;
