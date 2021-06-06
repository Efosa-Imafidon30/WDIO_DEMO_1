const assert = require('assert');
const IntroPage = require('../pages/intro.page');
const LoginPage = require('../pages/login.page');

describe('Intro Test Suit', () => {
  it('should display correct title', async () => {
    await browser.url('');
    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');

    await LoginPage.clickOnSubmitButton();

    var titleText = await IntroPage.titleText;
    assert.strictEqual(await titleText.getTitle(), 'Superhero Roster', 'Text are not the same');
  });

  it('should display correct image', async () => {
    await browser.url('');
    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');

    await LoginPage.clickOnSubmitButton();

    var mainImage = await IntroPage.mainImage;
    assert.strictEqual(
      await mainImage.getAttribute('src'),
      'http://192.168.1.188:8080/superHeroApp/images/superhero.png',
      'SRC is not the same'
    );

    assert.strictEqual(await mainImage.getAttribute('alt'), 'Superhero Image', 'Alt is not the same');
  });
});
