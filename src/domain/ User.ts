export class User {
    constructor(public id: string, public name: string, public email: string) {}
  
    validateEmail() {
      if (!this.email.includes("@")) throw new Error("Invalid email");
    }
  }
  