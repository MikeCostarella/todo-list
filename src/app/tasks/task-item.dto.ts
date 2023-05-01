export class TaskItem {

  constructor(public title: string) {
    this.title = title;
  }

  public isDone = false;

  toggleIsDone() {
    this.isDone = !this.isDone;
  }
}
