// tiene todas las paginas relacionadas al auth:
// - sign in
// - sign up

import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
	return (
		<div className="auth__main">
			<div className="auth__box-container">
				<Switch>
					<Route exact path="/auth/login" component={LoginScreen} />
					<Route path="/auth/register" component={RegisterScreen} />
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</div>
	);
};
