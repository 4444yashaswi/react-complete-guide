import './UserForm.css';
import Button from '../UI/Button';

const UserForm = props => {
	return <div className = 'user-form__container'>
		<div className = 'user-form__username'>
			<lable>Username</lable>
			<input />
		</div>
		<div className = 'user-form__age'>
			<lable>Age (Years)</lable>
			<input />
		</div>
		<Button type = 'submit'>Add User</Button>
	</div>
};

export default UserForm;