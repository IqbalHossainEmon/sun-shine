import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import CircleLoader from "react-spinners/CircleLoader";

const PrivateRoute = ({ children }) => {
	const { user, isLoading } = useAuth();

	if (isLoading) {
		return (
			<div
				style={{
					height: "100vh",
					width: "100vw",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<CircleLoader style color={"orange"} loading={true} size={150} />
			</div>
		);
	} else {
		return user.email ? children : <Navigate to='/login' />;
	}
};
export default PrivateRoute;
