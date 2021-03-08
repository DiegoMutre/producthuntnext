import firebase, { FirebaseContext } from "../firebase";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
    return (
        <FirebaseContext.Provider value={firebase}>
            <Component {...pageProps} />
        </FirebaseContext.Provider>
    );
}

export default MyApp;
