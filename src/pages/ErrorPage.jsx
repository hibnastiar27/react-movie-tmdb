import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	return (
		<div className="h-screen flex flex-col gap-2 justify-center items-center">
			<h1 className="text-3xl font-bold">Opps!</h1>
			<p>Sorry, un expected error has occured</p>
			<p className="text-xl text-red-500">
				{error.status + " " + error.statusText || error.message}
			</p>
		</div>
	);
}

export default ErrorPage;
