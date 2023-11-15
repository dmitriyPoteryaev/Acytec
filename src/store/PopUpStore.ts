import { makeAutoObservable } from "mobx";
class PopUpStore {
  isVisPopUp: boolean = false;

  handlerChangeVisPopUp = () => {
    this.isVisPopUp = !this.isVisPopUp;
  };

  globalhandlerChangeVisPopUp = () => {
    if (this.isVisPopUp === true) {
      this.isVisPopUp = !this.isVisPopUp;
    }
    return;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export { PopUpStore };
