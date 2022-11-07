import SearchListHOC from "../hoc/SearchList";

function Postlist({ data: posts }: { data: any }) {
    function renderPosts() {
        return posts.slice(0, 10).map((post: any) => {
            return <p key={post.id}>{post.title}</p>;
        });
    }
    return <div>{renderPosts()}</div>;
}
const SearchPosts = SearchListHOC(Postlist, "posts");
export default SearchPosts;
