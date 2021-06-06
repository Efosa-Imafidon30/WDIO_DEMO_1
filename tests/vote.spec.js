const assert = require('assert');
const VotePage = require('../pages/vote.page');
const LoginPage = require('../pages/login.page');

describe('Vote Test Suite', () => {
  it('should increment vote', async () => {
    await browser.url('');

    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');

    await LoginPage.clickOnSubmitButton();

    var voteItemVal1 = await VotePage.voteItemValue1;
    let originalValue = Number(await voteItemVal1.getText());

    await VotePage.clickOnVoteSubmitButton();

    var voteItem = await VotePage.voteItemValue1;

    assert.strictEqual(Number(await voteItem.getText()), originalValue + 1, 'Values are not the same');

    var alert = await VotePage.thanksAlert;
    assert.strictEqual(await alert.isDisplayed(), true, 'Thanks Alert is not displayed');
    assert.strictEqual(await alert.getText(), 'Thanks for voting!', 'Thanks Alert Text is not the same');
  });
});
