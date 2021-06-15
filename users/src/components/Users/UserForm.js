import { useState } from 'react';
import './UserForm.css';
import Button from '../UI/Button';

const UserForm = props => {
	return <div className = 'user-form__container'>
		<form onSubmit = {props.onSubmitHandler}>
			<div className = 'user-form__username'>
				<lable htmlFor = 'username'>Username</lable>
				<input id = 'username' value = {props.username} onChange = {props.usernameChangeHandler} />
			</div>
			<div className = 'user-form__age'>
				<lable htmlFor = 'age'>Age (Years)</lable>
				<input id = 'age'  value = {props.age} onChange = {props.ageChangeHandler}/>
			</div>
			<Button type = 'submit'>Add User</Button>
		</form>
	</div>
};

export default UserForm;