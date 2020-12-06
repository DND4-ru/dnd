import { action, observable, makeObservable } from 'mobx';


class Authentication {
  content = undefined;

  constructor() {
    makeObservable(this, {
      content: observable,
      setContent: action,
    });
  }

  setContent(content) {
    this.content = content;
  }
}

export default Authentication;
