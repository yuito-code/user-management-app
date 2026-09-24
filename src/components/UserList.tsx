import type { User } from "../types";
import { Link } from "react-router-dom";

type UserListProps = {
  users: User[];
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};

const UserList = ({
  users,
  onUpdate,
  onDelete,
}: UserListProps) => {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
          <p>{user.email}</p>

          <button onClick={() => onUpdate(user.id)}>
            名前変更
          </button>

          <button onClick={() => onDelete(user.id)}>
            削除
          </button>
        </div>
      ))}
    </>
  );
};

export default UserList;