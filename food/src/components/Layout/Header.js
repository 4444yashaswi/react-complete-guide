import { Fragment } from 'react';

import mealsImage from '../../assets/header-image.jpg';
import classes from './Header.module.css';

const header = () => {
	return <Fragment>
	<header className = {classes.header}>
		<h1>ReactMeals</h1>
		<button>Cart</button>
	</header>
	<div className = {classes['main-image']}>
		<img src = {mealsImage} alt = 'A table full of food!' />
	</div>
	</Fragment>
}

export default header;