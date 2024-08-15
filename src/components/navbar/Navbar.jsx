import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

// BEM -> Block Element Modifier

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false); // State to toggle menu visibility

	// Component for rendering menu items
	const Menu = () => (
		<>
			<p>
				<a href="#home">Home</a> {/* Link to Home section */}
			</p>
			<p>
				<a href="#wgpt3">What is GPT3?</a>{" "}
				{/* Link to GPT3 information section */}
			</p>
			<p>
				<a href="#possibility">Open AI</a>{" "}
				{/* Link to Open AI section */}
			</p>
			<p>
				<a href="#features">Case Studies</a>{" "}
				{/* Link to Case Studies section */}
			</p>
			<p>
				<a href="#blog">Library</a> {/* Link to Library section */}
			</p>
		</>
	);

	return (
		<div className="gpt3__navbar">
			<div className="gpt3__navbar-links">
				<div className="gpt3__navbar-links_logo">
					<img src={logo} alt="Logo" /> {/* Display logo */}
				</div>
				<div className="gpt3__navbar-links_container">
					<Menu /> {/* Render menu items */}
				</div>
			</div>
			<div className="gpt3__navbar-sign">
				<p>Sign in</p> {/* Sign in text */}
				<button type="button">Sign up</button> {/* Sign up button */}
			</div>
			<div className="gpt3__navbar-menu">
				{/* Toggle between menu icon and close icon */}
				{toggleMenu ? (
					<RiCloseLine
						color="#fff" /* Set color of close icon */
						size={27} /* Set size of close icon */
						onClick={() =>
							setToggleMenu(false)
						} /* Close menu on click */
					/>
				) : (
					<RiMenu3Line
						color="#fff" /* Set color of menu icon */
						size={27} /* Set size of menu icon */
						onClick={() =>
							setToggleMenu(true)
						} /* Open menu on click */
					/>
				)}
				{/* Render menu container if toggleMenu is true */}
				{toggleMenu && (
					<div className="gpt3__navbar-menu_container scale-up-center">
						<div className="gpt3__navbar-menu_container-links">
							<Menu /> {/* Render menu items */}
						</div>
						<div className="gpt3__navbar-menu_container-links-sign">
							<p>Sign in</p> {/* Sign in text */}
							<button type="button">Sign up</button>{" "}
							{/* Sign up button */}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
