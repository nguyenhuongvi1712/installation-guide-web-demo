// import "./App.css";
import RegisterForm from "./components/RegisterForm";
import DashBoard from "./components/DashBoard";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<RegisterForm />} />
				<Route path="/dashboard" element={<DashBoard />} />
			</Routes>
		</>
	);
}

export default App;
