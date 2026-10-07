import type { User } from "../types";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async(): Promise<User[]> => {
  const response = await fetch(API_URL);

  if(!response.ok) {
    throw new Error('ユーザーの取得に失敗しました');
  }
  return response.json();
};

export const getUser = async (id: number): Promise<User> => {
  const response = await fetch(`${API_URL}/${id}`);

  if(!response.ok) {
    throw new Error("ユーザーの取得に失敗しました");
  }

  return response.json();
};

export const createUser = async (
  name: string,
  email: string
): Promise<User> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });

  if (!response.ok) {
    throw new Error('失敗');
  }

  return response.json();
}

export const updateUser = async (
  id: number,
  name: string
): Promise<User> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });

  if(!response.ok) {
    throw new Error('失敗');
  }

  return response.json();
}

export const deleteUser = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if(!response.ok) {
    throw new Error('失敗');
  }
};