import { FormEvent } from 'react';

type UserFormProps = {
  newName: string;
  newEmail: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
};

const UserForm = ({
  newName,
  newEmail,
  onNameChange,
  onEmailChange,
  onSubmit,
}: UserFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={newName}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="名前"
      />

      <input
        type="email"
        value={newEmail}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder="メールアドレス"
      />

      <button type="submit">追加</button>
    </form>
  );
};

export default UserForm;