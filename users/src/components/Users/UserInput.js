import { useState } from 'react';
import './UserInput.css';
import UserForm from './UserForm'

const UserInput = props => {
	const [ username, setUsername ] = useState('');
	const [ age, setAge ] = useState('');

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setAge(event.target.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		if( username.trim().length === 0 || age.trim().length === 0 ){
			return;
		}

		if( age < 1 ){
			return;
		}

		//console.log('name: '+username+' age: '+age);
		props.setData((prevData) => {
			return [...prevData , {name: username , age: age}];
		});
		setAge('');
		setUsername('');
	};

	return <div className = 'user-input__container'>
    	<UserForm 
    		usernameChangeHandler = {usernameChangeHandler}
    		ageChangeHandler = {ageChangeHandler}
    		onSubmitHandler = {onSubmitHandler}
    		username = {username}
    		age = {age}
    	/>
	</div>
}

export default UserInput;