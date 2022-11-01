import { getUser } from "../request";
const fetchedData = getUser();
const User = () => {
    const user = fetchedData.read();
    return (
        <p>
            <b>name:</b>
            {user?.name}
            <br />
            <b>phone:</b>
            {user.phone}
        </p>
    );
};

export default User;
