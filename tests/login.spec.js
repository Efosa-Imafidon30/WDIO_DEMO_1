const assert = require('assert');
const HeaderPage = require('../pages/header.page');
const LoginPage = require('../pages/login.page');
//valid email: 1@2.com
//valid password: password
describe('Login Test Suite', () => {
  it('should display error when password is missing', async () => {
    await browser.url('');

    var emailField = await LoginPage.emailField;
    await emailField.setValue('test@test.com');

    var submitButton = await LoginPage.submitButton;
    await submitButton.click();

    assert.strictEqual(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(await browser.getAlertText(), 'Please enter an email and password', 'alert text is not equal');
    await browser.acceptAlert();

    assert.strictEqual(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when email is missing', async () => {
    await browser.url('');

    var passwordField = await LoginPage.passwordField;
    await passwordField.setValue('blah');

    var submitButton = await LoginPage.submitButton;
    await submitButton.click();

    assert.strictEqual(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(await browser.getAlertText(), 'Please enter an email and password', 'alert text is not equal');

    await browser.acceptAlert();

    assert.strictEqual(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when email and password are missing', async () => {
    await browser.url('');

    var submitButton = await LoginPage.submitButton;
    await submitButton.click();

    assert.strictEqual(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(await browser.getAlertText(), 'Please enter an email and password', 'alert text is not equal');

    await browser.acceptAlert();

    assert.strictEqual(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when email is incorrect', async () => {
    await browser.url('');

    var emailField = await LoginPage.emailField;
    await emailField.setValue('fake@fake.com');

    var passwordField = await LoginPage.passwordField;
    await passwordField.setValue('password');

    var submitButton = await LoginPage.submitButton;
    await submitButton.click();

    assert.strictEqual(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(await browser.getAlertText(), 'Invalid email and password', 'alert text is not equal');

    await browser.acceptAlert();

    assert.strictEqual(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when password is incorrect', async () => {
    await browser.url('');

    var emailField = await LoginPage.emailField;
    await emailField.setValue('1@2.com');

    var passwordField = await LoginPage.passwordField;
    await passwordField.setValue('wrong');

    var submitButton = await LoginPage.submitButton;
    await submitButton.click();

    assert.strictEqual(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(await browser.getAlertText(), 'Invalid email and password', 'alert text is not equal');

    await browser.acceptAlert();

    assert.strictEqual(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when password case is incorrect', async () => {
    await browser.url('');

    var emailField = await LoginPage.emailField;
    await emailField.setValue('1@2.com');

    var passwordField = await LoginPage.passwordField;
    await passwordField.setValue('PASSWORD');

    var submitButton = await LoginPage.submitButton;
    await submitButton.click();

    assert.strictEqual(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(await browser.getAlertText(), 'Invalid email and password', 'alert text is not equal');

    await browser.acceptAlert();

    assert.strictEqual(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should login with valid email and password', async () => {
    await browser.url('');

    var emailField = await LoginPage.emailField;
    await emailField.setValue('1@2.com');

    var passwordField = await LoginPage.passwordField;
    await passwordField.setValue('password');

    var submitButton = await LoginPage.submitButton;
    await submitButton.click();

    var overlay = await LoginPage.overlay;
    assert.strictEqual(await overlay.isDisplayed(), false, 'Overlay is still displayed');
  });

  it('should remember login creds', async () => {
    await browser.url('');

    var emailField = await LoginPage.emailField;
    await emailField.setValue('1@2.com');

    var passwordField = await LoginPage.passwordField;
    await passwordField.setValue('password');

    var loginCheckBox = await LoginPage.rememberLoginCheckbox;
    await loginCheckBox.click();

    var submitButton = await LoginPage.submitButton;
    await submitButton.click();

    var overlay = await LoginPage.overlay;
    assert.strictEqual(await overlay.isDisplayed(), false, 'Overlay is still displayed');

    var logoutButton = await HeaderPage.logoutButton;
    await logoutButton.click();

    //await browser.pause(1000);
    var overlay = await LoginPage.overlay;
    assert.strictEqual(await overlay.isDisplayed(), true, 'Overlay is not displayed');

    var emailField = await LoginPage.emailField;
    assert.strictEqual(await emailField.getValue(), '1@2.com', 'value are not the same');

    var passwordField = await LoginPage.passwordField;
    var value = await passwordField.getValue();
    assert.strictEqual(await value.length, 8, 'Password is too short');

    var rememberPasswordCeckbox = await LoginPage.rememberLoginCheckbox;
    assert.strictEqual(await rememberPasswordCeckbox.isSelected(), true, 'checkbox is not selected');
  });
});
