import React, { useState } from "react";
import styles from "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

// BEM -> Block Element Modifier

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const Menu = () => (
		<>
			<p>
				<a href="#home">Home</a>
			</p>
			<p>
				<a href="#wgpt3">What is GPT3?</a>
			</p>
			<p>
				<a href="#possibility">Open AI</a>
			</p>
			<p>
				<a href="#features">Case Studies</a>
			</p>
			<p>
				<a href="#blog">Library</a>
			</p>
		</>
	);
	return (
		<div className={styles.gpt3__navbar}>
			<div className={styles.gpt3__navbarLinks}>
				<div className={styles.gpt3__navbarLinks_logo}>
					<img src={logo} alt="logo" />
				</div>
				<div className={styles.gpt3__navbarLinks_container}>
					<Menu />
				</div>
			</div>
			<div className={styles.gpt3__navbarSign}>
				<p>Sign In</p>
				<button type="button">Sign Up</button>
			</div>
			<div className={styles.gpt3__navbarMenu}>
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div
						className={styles.gpt3__navbarMenu_container}
						{...styles.scale_up_center}
					>
						<div className={styles.gpt3__navbarMenu_container}>
							<Menu />
						</div>
						<div
							className={
								styles.gpt3__navbarMenu_container_links_sign
							}
						>
							<p>Sign in</p>
							<button type="button">Sign up</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
