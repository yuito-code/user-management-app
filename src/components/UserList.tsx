import type { User } from "../types";

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
          <p>{user.name}</p>
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