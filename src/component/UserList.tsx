import SearchListHOC from "../hoc/SearchList";

function UserList({ data: users }: { data: any }) {
    function renderUsers() {
        return users.map((user: any) => {
            return <p key={user.id}>{user.name}</p>;
        });
    }
    return <div>{renderUsers()}</div>;
}
const SearchUsers = SearchListHOC(UserList, "users");
export default SearchUsers;
