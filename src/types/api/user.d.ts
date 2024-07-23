interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

type UserWithoutTimestamps = OmitFields<User, "createdAt" | "updatedAt" | "id">;

type UserResponse = User[];
type UserDetailResponse = User;
type CreateUserResponse = UserWithoutTimestamps;
type UpdateUserResponse = UserWithoutTimestamps;
type DeleteUserResponse = { message: string };
