import { Injectable } from '@nestjs/common';
import { ErrorEntity } from 'src/entities/error.entity';
import { AuthResponseEntity } from './entities/auth-response.entity';

type TUser = {
  username: string;
  password: string;
  token: string;
};
const users: Array<TUser> = [
  { username: 'admin', password: 'admin', token: 'token-for-admin' },
  { username: 'user', password: 'user', token: 'token-for-user' },
];

@Injectable()
export class AuthService {
  async auth(
    username: string,
    password: string,
  ): Promise<AuthResponseEntity | ErrorEntity> {
    return new Promise((resolve, reject) => {
      const user = users.find(
        ({ username: name, password: pass }) =>
          password === pass && username === name,
      );
      if (user) {
        resolve({ username, token: user.token });
      } else reject({ err: { title: 'Invalid username or password' } });
    });
  }
}
