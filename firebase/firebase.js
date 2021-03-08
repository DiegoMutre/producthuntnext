import app from "firebase/app";
import firebaseConfig from "./config";
import "firebase/auth";

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
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
}

const firebase = new Firebase();

export default firebase;
