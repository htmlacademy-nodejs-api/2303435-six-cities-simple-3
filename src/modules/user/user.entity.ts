import {User} from '../../types/user.type.js';
import typegoose, {getModelForClass, defaultClasses} from '@typegoose/typegoose';
import {createSHA256} from '../../utils/common.js';
import {UserStatus} from '../../types/user-status.type';

const {prop, modelOptions} = typegoose;

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})
export class UserEntity extends defaultClasses.TimeStamps implements User {
  constructor(data: User) {
    super();

    this.email = data.email;
    this.avatarPath = data.avatarPath;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.status = data.status;
  }

  @prop({ unique: true, required: true })
  public email!: string;

  @prop({required: true, default: ''})
  public avatarPath!: string;

  @prop({required: true, default: ''})
  public firstname!: string;

  @prop({required: true, default: ''})
  public lastname!: string;

  @prop({required: true, default: ''})
  public password!: string;

  @prop({required: true, default: 'primary'})
  public status!: UserStatus;

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
