import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>ページが見つかりません</p>

      <Link to="/">ホームに戻る</Link>
    </div>
  );
};

export default NotFound;