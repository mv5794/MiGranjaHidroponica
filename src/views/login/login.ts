class LoginController {
  contructor() {
    console.log('constructed');
  }

   doLogin(username: string, password: string) {
    console.log(username, password);
  }
}

const loginController = new LoginController();
export default loginController;