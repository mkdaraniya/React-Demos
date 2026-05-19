import { useParams } from 'react-router-dom';

function User() {
    const { userid } = useParams();
    return (
        <div>
            User : 100
        </div>
    )
}

export default User;