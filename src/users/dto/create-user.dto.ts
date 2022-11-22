import { Length } from 'class-validator';

export class createUser {
  @Length(6, 20, { message: 'must be less  6 and more than 20' })
  readonly username: string;
  @Length(8, 16, { message: 'must be less  8 and more than 16' })
  password: string;
}
