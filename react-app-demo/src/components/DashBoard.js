import * as React from "react";

function DashBoard() {
    const data = localStorage.getItem("mess")? localStorage.getItem("mess") : "user"
	return (
		<div className="App">
			<h1>Hello {data}</h1>
		</div>
	);
}

export default DashBoard;
