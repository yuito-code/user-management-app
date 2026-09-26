import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../services/userApi";
import type { User } from "../types";

const UserDetail = () => {
  const { id } = useParams();

  const [user, setUser] = useState<User| null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUser(Number(id));
        setUser(data);
      } catch(error) {
        console.error(error);
        setError('ユーザーの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!user) {
    return <p>ユーザーが見つかりません</p>;
  }

  return (
    <div>
      <h1>ユーザー詳細</h1>

      <p>ID: {user.id}</p>
      <p>名前: {user.name}</p>
      <p>メール: {user.email}</p>

      <Link to="/users">ユーザー一覧に戻る</Link>

      <Link to={`/users/${user.id}/edit`}>
        編集
      </Link>
    </div>
  );
};

export default UserDetail;