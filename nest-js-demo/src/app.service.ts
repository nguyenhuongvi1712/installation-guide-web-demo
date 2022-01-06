import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  register(name: string, email: string): string {
    return 'Registered successfully. Hello ' + name + ' (email: ' + email + ')';
  }
}
