interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

type UserResponse = User[];
type UserDetailResponse = User;
type DeleteUserResponse = { message: string };
