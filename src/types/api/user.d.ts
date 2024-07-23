interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

type UserResponse = User[];
type UserDetailResponse = User;
type CreateUserResponse = User;
type UpdateUserResponse = User;
type DeleteUserResponse = { message: string };
