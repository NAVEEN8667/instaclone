//npx json-server --watch db/dummy.json --port 3000 --static ./data
import Posts from "./Posts";
import Stories from "./Stories";
function Feed() {
  return (
    <>
      <div className="feed">
        <Stories />
        <Posts />
      </div>
    </>
  );
}
export default Feed;
