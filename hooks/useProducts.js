import { useEffect, useState } from "react";
import firebase from "../firebase";

const useProducts = order => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            firebase.db
                .collection("products")
                .orderBy(order, "desc")
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

    return {
        products,
    };
};

export default useProducts;
