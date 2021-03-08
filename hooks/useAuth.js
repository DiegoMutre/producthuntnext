import { useEffect, useState } from "react";
import firebase from "../firebase";
const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(
            userAuthenticated => {
                if (userAuthenticated) {
                    setUser(userAuthenticated);
                    return;
                }

                setUser(null);
            }
        );

        return () => unsubscribe();
    }, []);

    return user;
};

export default useAuth;
