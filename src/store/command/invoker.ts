import { ICommand } from '../interfaces';

export class Invoker {
  private readonly startCommand: ICommand;

  private readonly endCommand: ICommand;

  constructor(startCommand: ICommand, endCommand: ICommand) {
    this.startCommand = startCommand;
    this.endCommand = endCommand;
  }

  public executeCommands(): void {
    try {
      this.startCommand.execute();
      this.endCommand.execute();
    } catch (e: unknown) {
      const error = e as SyntaxError;

      console.log(error.message);
    }
  }
}
