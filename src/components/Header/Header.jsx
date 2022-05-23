import React from 'react';
import { Link } from 'react-router-dom';
import userPic from '../../assets/pic_filled.png';
import './header.scss';
const Header = () => {
	return (
		<div className="header">
			<Link to={'/'}>
				<div className="logo">Movie App</div>
			</Link>
			<div className="user-image">
				<img src={userPic} alt="user" />
			</div>
		</div>
	);
};

export default Header;
