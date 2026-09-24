import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>ホームへ</h1>

      <Link to="/users">ユーザー一覧</Link>
    </div>
  );
};

export default Home;