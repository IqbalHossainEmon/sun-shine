import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
	onAuthStateChanged,
	signOut,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
	const [isLoading, setLoading] = useState(true);
	const [user, setUser] = useState({});
	const [error, setError] = useState("");

	const signInUsingGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const signInUsingGithub = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};
	const signInUsingPassword = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const setUserName = (userName) => {
		updateProfile(auth.currentUser, { displayName: userName })
			.then((result) => {
				setUser(result.user);
			})
			.catch((error) => setError(error.message));
	};

	const signInUsingPass = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setLoading(true);
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setLoading(false);
		});
		return () => unsubscribe;
	}, []);

	const logOut = () => {
		setError("");
		setLoading(true);
		signOut(auth)
			.then(setUser({}))
			.finally(() => setLoading(false));
	};

	return {
		isLoading,
		setLoading,
		user,
		setUser,
		error,
		setError,
		signInUsingGithub,
		signInUsingGoogle,
		logOut,
		signInUsingPassword,
		setUserName,
		signInUsingPass,
	};
};

export default useFirebase;
