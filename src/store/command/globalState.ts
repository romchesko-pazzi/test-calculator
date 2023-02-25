export class GlobalState {
  public expression: string;

  public result: string;

  public id: string;

  public isError: boolean;

  constructor() {
    this.id = '';
    this.expression = '';
    this.result = '';
    this.isError = false;
  }
}
export const globalState = new GlobalState();
