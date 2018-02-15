class RegisterController {
    constructor() {
      this.email="";
      this.password="";  
    }
doRegister(){
    console.log(this.email);
    console.log(this.password);
}
}
RegisterController.$inject = ['$http'];
export default RegisterController;