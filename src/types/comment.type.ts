export type Comment = {
  text: string;
  createDate: Date;
  rating: 1 | 2 | 3 | 4 | 5;
  authorId: number;
}
