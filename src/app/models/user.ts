export class User {
    public id: string = ''
    public name: string = ''
    public username: string = ''
    public email: string = ''
    public address: UserAddress | null = null
    public phone: string = ''
    public website: string = ''
    public company: {
        name: string,
        catchPhrase: string,
        bs: string
    } |  null = null;
    
  
    constructor(data?:any) {
      if (data) {
        this.id = data.id ? data.id : ''
        this.name = data.name ? data.name : ''
        this.username = data.username ? data.username : ''
        this.email = data.email ? data.email : ''
        this.address = data.address
          ? new UserAddress(data.address)
          : null
        this.phone = data.phone ? data.phone : ''
        this.website = data.website ? data.website : ''
        this.company = data.company ? data.company : ''
      }
    }
  }

  export class UserAddress {
    public street: string = '';
    public suite: string = '';
    public city: string = '';
    public zipcode: string = '';
    public geo: {
        lat: string,
        lng : string
    } | null = null;

    constructor(data?:any) {
        if (data) {
          this.street = data.street ? data.street : ''
          this.suite = data.suite ? data.suite : ''
          this.city = data.city ? data.city : ''
          this.zipcode = data.zipcode ? data.zipcode : ''
          this.geo = data.geo
            ? data.geo
            : null
        }
      }  
  }