export interface DataForToken {
  id: string;
}

export interface DefaultTable {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface User extends DefaultTable {
  userName: string;
  email: string;
  type: UserTypes;
  status: UserStatus;
  password?: string;
  profilePhoto?: string;
}

export enum UserStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Blocked = 'Blocked',
}

export enum UserTypes {
  Admin = 'Admin',
  User = 'User',
}

export interface verifySession {
  id: string;
  userId: string;
  sessionToken: string;
  createdAt: string;
  updatedAt: string;
}

export enum s3Paths {
  profilePictures = 'profile-pictures/',
}
