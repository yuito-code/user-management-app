import type { User } from "../types";
import { Link } from "react-router-dom";

type UserListProps = {
  users: User[];
  onDelete: (id: number) => void;
};

const UserList = ({
  users,
  onDelete,
}: UserListProps) => {
  if (users.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-gray-500">
        ユーザーが見つかりません
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-gray-600">
            <th className="px-4 py-3 font-medium">名前</th>
            <th className="px-4 py-3 font-medium">メールアドレス</th>
            <th className="px-4 py-3 font-medium">操作</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-100 last: border-0 hover:bg-gray-50"
              >
                <td className="px-4 py-4 font-medium text-gray-800">
                  <Link
                    to={`/users/${user.id}`}
                    className="hover:text-blue-700 hover:underline"
                  >
                    {user.name}
                  </Link>
                </td>

                <td className="px-4 py-4 text-gray-600">
                  {user.email}
                </td>

                <td className="px-4 py-4">
                  <div className="flex justify-end gap-2">
                    <Link
                      to={`/users/${user.id}/edit`}
                      className="rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      編集
                    </Link>

                    <button
                      type="button"
                      onClick={() => onDelete(user.id)}
                      className="rounded-md border border-gray-300 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      削除
                    </button>
                  </div>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default UserList;