export class Attendee {
  constructor(public firstName: string,
              public lastName: string,
              public email: string,
              public phone?: string,
              public companyName?: string) {}
}
