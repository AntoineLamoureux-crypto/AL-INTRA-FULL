class Auth {
    constructor() {
        if (sessionStorage.getItem("user") !== null) {
          this.user = JSON.parse(sessionStorage.getItem("user"))
          this.authenticated = true;
        }
        else {
          this.user = undefined
          this.authenticated = false;
        }
    }
  
    login(cb, user) {
      this.authenticated = true;
      this.user = user;
      sessionStorage.setItem("user", JSON.stringify(this.user));
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      this.user = undefined;
      sessionStorage.removeItem("user");
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
}
  
export default new Auth();