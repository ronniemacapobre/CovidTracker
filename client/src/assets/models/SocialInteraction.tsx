export default class SocialInteraction {
  id: string;
  name: string;
  date: Date;
  hours: number;
  isSocialDistancing: boolean;

  constructor(data: any) {
    this.id = data._id;
    this.name = data.name;
    this.date = new Date(data.date);
    this.hours = data.hours;
    this.isSocialDistancing = data.isSocialDistancing;
  }
}
