import app from "firebase/app";
import firebaseConfig from "./config";
import "firebase/auth";
import "firebase/firestore";

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
        this.db = app.firestore();
    }

    async register(username, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(
            email,
            password
        );

        return await newUser.user.updateProfile({
            displayName: username,
        });
    }

    async login(email, password) {
        return await this.auth.signInWithEmailAndPassword(email, password);
    }

    async logout() {
        await this.auth.signOut();
    }
}

const firebase = new Firebase();

export default firebase;
