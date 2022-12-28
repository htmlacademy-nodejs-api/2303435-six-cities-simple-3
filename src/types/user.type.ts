import {UserStatus} from './user-status.type';

export type User = {
  email: string;
  avatarPath: string;
  firstname: string;
  lastname: string;
  password: string;
  status: UserStatus;
}
