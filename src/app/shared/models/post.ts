export class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(titleArgument: string, contentArgument: string) {
    this.title = titleArgument;
    this.content = contentArgument;
    this.loveIts = 0;
    this.created_at = new Date();
  }

}
