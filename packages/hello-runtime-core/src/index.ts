import { capitalize } from '@iworld/hello-shared-utils';

export default class Hello {
  msg: string;
  constructor(msg: string) {
    this.msg = capitalize(msg);
  }

  say(): string {
    return 'Hello, ' + this.msg;
  }
}
