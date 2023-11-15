import { makeAutoObservable, observable, action } from "mobx";
class ModalStore {
  isVisModal: boolean = false;

  handlerChangeVisModal = () => {
    this.isVisModal = !this.isVisModal;
  };

  globalhandlerChangeVisModal = () => {
    if (this.isVisModal === true) {
      this.isVisModal = !this.isVisModal;
    }
    return;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export { ModalStore };
