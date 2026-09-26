import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../services/userApi";
import type { User } from "../types";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ① 現在のユーザー情報を取得
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser(Number(id));

        setUser(data);
        setName(data.name);
        setEmail(data.email);
      } catch (error) {
        console.error(error);
        setError("ユーザーの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  // ② 保存
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    try {
      await updateUser(user.id, name);

      navigate("/users");
    } catch (error) {
      console.error(error);
      setError("ユーザーの更新に失敗しました");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>ユーザー編集</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>名前</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>メールアドレス</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">保存</button>
      </form>

      <Link to={`/users/${user?.id}`}>詳細に戻る</Link>
    </div>
  );
};

export default EditUser;