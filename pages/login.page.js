class LoginPage {
  get headingText() {
    return $('#login-title');
  }

  get emailLabel() {
    return $('#form-login > div:nth-child(1) > label');
  }

  get emailField() {
    return $('#loginEmail');
  }

  get passwordLable() {
    return $('#form-login > div:nth-child(2) > label');
  }

  get passwordField() {
    return $('#loginPassword');
  }

  get rememberLoginCheckbox() {
    return $('#rememberLoginChk');
  }

  get rememberLoginLabel() {
    return $('#form-login > div.form-check > label');
  }

  get submitButton() {
    return $('#form-login > button');
  }

  get overlay() {
    return $('#overlay');
  }

  async enterEmail(username) {
    await (await this.emailField).setValue(username);
  }

  async enterPassword(password) {
    await (await this.passwordField).setValue(password);
  }

  async clickOnSubmitButton() {
    await (await this.submitButton).click();
  }
}

module.exports = new LoginPage();
