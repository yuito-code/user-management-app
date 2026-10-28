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
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <p className="mx-auto max-w-3xl text-sm text-gray-500">
          読み込み中...
        </p>
      </main>
    );
  }

  if (error || !user) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-500">
            {error || 'ユーザーが見つかりません'}
          </p>

          <Link
            to="/users"
            className="mt-4 inline-block text-sm text-blue-700 hover:underline"
          >
            ユーザー一覧に戻る
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to ="/" className="text-xl font-semibold">
            User Management
          </Link>

          <Link
            to="/users"
            className="text-sm text-gray-600 hover:text-blue-700"
          >
            ユーザー一覧
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-8">
        <div className="mb-6">
          <p className="mb-2 text-sm text-gray-500">
            <Link to="/users" className="text-sm text-gray-500">
              ユーザー一覧
            </Link>
            {" / "}ユーザー詳細
          </p>

          <h1 className="text-2xl font-semibold">ユーザー詳細</h1>
          <p className="mt-2 text-sm text-gray-500">
            登録されているユーザー情報を確認できます。
          </p>
        </div>
      </main>

      <section className="rounded-lg border border-gray-200 bg-white p-6">
        <dl className="divider-y divide-amber-200-gray-100">
          <div className="py-4">
            <dt className="text-sm text-gray-500">ユーザーID</dt>
            <dd className="mt-1 font-medium">{user.id}</dd>
          </div>

          <div className="py-4">
            <dt className="text-sm text-gray-500">名前</dt>
            <dd className="mt-1 font-medium">{user.name}</dd>
          </div>

          <div className="py-4">
            <dt className="text-sm text-gray-500">メールアドレス</dt>
            <dd className="mt-1">{user.email}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-100 pt-5">
          <Link
            to={`/users/${user.id}/edit`}
            className="rounded-md bg-blue-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-450"
          >
            編集する
          </Link>

          <Link
            to="/users"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            一覧に戻る
          </Link>
        </div>
      </section>
    </div>
  )
};
export default UserDetail;