export class WFMEvent {
  constructor(
    public type: string,
    public amount: number,
    public category: string,
    public date: string,
    public description: string,
    public _id?: string,
    public catName?: string,
    public user?: string
  ) {}
}
