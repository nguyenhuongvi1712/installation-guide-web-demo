import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "25ch",
	},
}));

function RegisterForm() {
    const navigate = useNavigate();
	const classes = useStyles();
     const formik = useFormik({
			initialValues: {
				email: "",
				password: "",
                username: ""
			},
			onSubmit: (values) => {
				handleSubmit(values);
			},
		});
    const handleSubmit = async (values) => {
		const { email, password , username } = values;
		const res = await axios({
			method: "post",
			url: "http://localhost:4001",
			data: { 
                email,
                password,
                username
             },
		});
		if (res) {
            localStorage.setItem("mess",res.data)
			navigate("/dashboard", { state: res.data });
		} else {
			alert("Error!");
		}
	};
	return (
		<div className="App">
			<h1> Register Form </h1>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				onSubmit={formik.handleSubmit}
			>
				<TextField
					id="username"
					label="Username"
					variant="outlined"
					fullWidth
					margin="normal"
					value={formik.values.username}
					onChange={formik.handleChange}
				/>
				<TextField
					id="email"
					label="Email"
					variant="outlined"
					fullWidth
					type="email"
					margin="normal"
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				<TextField
					id="password"
					label="Password"
					variant="outlined"
					fullWidth
					type="password"
					margin="normal"
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
				<div className="center">
					<Button variant="outlined" color="primary" type="submit">
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
}

export default RegisterForm;
