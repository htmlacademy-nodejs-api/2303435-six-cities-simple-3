import {UserStatus} from '../../../types/user-status.type';

export default class CreateUserDto {
  public email!: string ;
  public avatarPath!: string;
  public firstname!: string;
  public lastname!: string;
  public password!: string;
  public status!: UserStatus;
}
