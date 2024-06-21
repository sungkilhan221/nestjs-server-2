import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Anson', email: 'andrew@gmail.com' },
    { username: 'Cory', email: 'cory@gmail.com' },
    { username: 'Greg', email: 'greg@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return { id, username: 'Andrew', email: 'andrew@gmail.com' };
  }
}
