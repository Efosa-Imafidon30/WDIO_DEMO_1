const assert = require('assert');
const HeaderPage = require('../pages/header.page');
const LoginPage = require('../pages/login.page');

describe('Header Test Suite', () => {
  it('should redirect to new site', async () => {
    await browser.url('');

    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');
    await LoginPage.clickOnSubmitButton();

    await HeaderPage.clickOnLink();
    assert.strictEqual(await browser.getUrl(), 'https://glitchitsystem.com/');
  });
  it('should open wolverine model and close it', async () => {
    await browser.url('');
    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');
    await LoginPage.clickOnSubmitButton();

    await HeaderPage.clickOnHeroFactLink();
    await HeaderPage.clickOnWolverineOption();

    var wolverineModelWindow = await HeaderPage.wolverineModelWindow;
    assert.strictEqual(await wolverineModelWindow.isDisplayed(), true, 'Model is not displayed');

    var wolverineWindowTitleText = await HeaderPage.wolverineModelTitleText;
    assert.strictEqual(await wolverineWindowTitleText.getText(), 'Wolverine Fact', 'Model title text is not the same');

    var wolverineContextText = await HeaderPage.wolverineModelContentText;
    assert.strictEqual(
      await wolverineContextText.getText(),
      'Wolverine made his first comic book appearance in 1974.',
      'Model content text is not the same'
    );

    await HeaderPage._wolverineModelCloseButton();
  });

  it('should open spiderman model and close it', async () => {
    await browser.url('');
    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');
    await LoginPage.clickOnSubmitButton();

    await HeaderPage.clickOnHeroFactLink();
    await HeaderPage.clickOnSpidermanOption();

    var spidermanModelWindow = await HeaderPage.spidermanModelWindow;
    assert.strictEqual(await spidermanModelWindow.isDisplayed(), true, 'Model is not displayed');

    var spidermanWindowTitleText = await HeaderPage.spidermanModelTitleText;
    assert.strictEqual(await spidermanWindowTitleText.getText(), 'Spider-Man Fact', 'Model title text is not the same');

    var spidermanContextText = await HeaderPage.spidermanModelContentText;
    assert.strictEqual(
      await spidermanContextText.getText(),
      'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.',
      'Model content text is not the same'
    );

    await HeaderPage._spidermanModelCloseButton();
  });

  it('Should search for wolverine', async () => {
    await browser.url('');

    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');
    await LoginPage.clickOnSubmitButton();

    await HeaderPage.enterIntoSearchField('Wolverine');
    await HeaderPage.clickOnSearcButton();

    assert.strictEqual(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(await browser.getAlertText(), 'Wolverine is awesome!', 'Text is not the same');
  });

  it('Should error because you did not search for wolverine', async () => {
    await browser.url('');

    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');
    await LoginPage.clickOnSubmitButton();

    await HeaderPage.enterIntoSearchField('something');
    await HeaderPage.clickOnSearcButton();

    assert.strictEqual(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(
      await browser.getAlertText(),
      'Your search for something returned 0 reults. Try something else.',
      'Text is not the same'
    );
  });

  it('should close the alert', async () => {
    await browser.url('');

    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');
    await LoginPage.clickOnSubmitButton();

    await HeaderPage.enterIntoSearchField('something');
    await HeaderPage.clickOnSearcButton();

    assert.strictEqual(await browser.isAlertOpen(), true, 'Alert is not open');

    await browser.acceptAlert();

    assert.strictEqual(await browser.isAlertOpen(), false, 'Alert is still open');
  });
});
