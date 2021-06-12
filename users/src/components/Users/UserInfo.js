import './UserInfo.css';
import Card from '../UI/Card';

const UserInfo = props => {
	return <div className = 'user-info__container'>
		{props.data.map(
			user => (
			<Card>
				{user.name} ({user.age} years old)
			</Card>
		))}
	</div>
};

export default UserInfo;