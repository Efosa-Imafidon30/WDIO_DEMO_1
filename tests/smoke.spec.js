const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const IntroPage = require('../pages/intro.page');
const RosterPage = require('../pages/roster.page');
const VotePage = require('../pages/vote.page');

describe('Smoke Test Suite', () => {
  it('should verify static elements are present', async () => {
    await browser.url('');

    //Vaerify the login Page
    var headingText = await LoginPage.headingText;
    assert.strictEqual(await headingText.isDisplayed(), true, 'LoginPage.HeadingText');

    var emailLable = await LoginPage.emailLabel;
    assert.strictEqual(await emailLable.isDisplayed(), true, 'LoginPage.EmailLabel');

    var emailField = await LoginPage.emailField;
    assert.strictEqual(await emailField.isDisplayed(), true, 'LoginPage.EmailField');

    var passwordLabel = await LoginPage.passwordLable;
    assert.strictEqual(await passwordLabel.isDisplayed(), true, 'LoginPage.PasswordLabel');

    var passwordField = await LoginPage.passwordField;
    assert.strictEqual(await passwordField.isDisplayed(), true, 'LoginPage.PasswordField');

    var rememberLoginCheckbox = await LoginPage.rememberLoginCheckbox;
    assert.strictEqual(await rememberLoginCheckbox.isDisplayed(), true, 'LoginPage.RememberLoginCheckbox');

    var rememberLoginLabel = await LoginPage.rememberLoginLabel;
    assert.strictEqual(await rememberLoginLabel.isDisplayed(), true, 'LoginPage.RememberLoginLabel');

    var submitButton = await LoginPage.submitButton;
    assert.strictEqual(await submitButton.isDisplayed(), true, 'LoginPage.SubmitButton');

    //Login

    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');

    await LoginPage.clickOnSubmitButton();

    //Verify the Header Page

    var logoutButton = await HeaderPage.logoutButton;
    assert.strictEqual(await logoutButton.isDisplayed(), true, 'HeaderPage.LogoutButton');

    var link = await HeaderPage.linkLink;
    assert.strictEqual(await link.isDisplayed(), true, 'HeaderPage.Link');

    var heroFactsLink = await HeaderPage.heroFactsLink;
    assert.strictEqual(await heroFactsLink.isDisplayed(), true, 'HeaderPage.HeroFactsLink');

    await heroFactsLink.click();
    var wolverineOption = await HeaderPage.wolverineOption;
    assert.strictEqual(await wolverineOption.isDisplayed(), true, 'HeaderPage.WolverineOption');

    var spidermanOption = await HeaderPage.spidermanOption;
    assert.strictEqual(await spidermanOption.isDisplayed(), true, 'HeaderPage.SpidermanOption');

    var searchField = await HeaderPage.searchField;
    assert.strictEqual(await searchField.isDisplayed(), true, 'HeaderPage.SearchField');

    var searchButton = await HeaderPage.searchButton;
    assert.strictEqual(await searchButton.isDisplayed(), true, 'HeaderPage.SearchButton');

    //Verify the Intro Page
    var titleText = await IntroPage.titleText;
    assert.strictEqual(await titleText.isDisplayed(), true, 'IntroPAge.TitleText');

    var mainImage = await IntroPage.mainImage;
    assert.strictEqual(await mainImage.isDisplayed(), true, 'IntroPAge.MainImage');

    //Very the Roster Page
    var instructionText = await RosterPage.instructionText;
    assert.strictEqual(await instructionText.isDisplayed(), true, 'RosterPage.instructionText');

    var listTitle = await RosterPage.listTitle;
    assert.strictEqual(await listTitle.isDisplayed(), true, 'RosterPage.listTitle');

    var wolverineItem = await RosterPage.wolverineItem;
    assert.strictEqual(await wolverineItem.isDisplayed(), true, 'RosterPage.wolverineItem');

    var ironmanItem = await RosterPage.ironmanItem;
    assert.strictEqual(await ironmanItem.isDisplayed(), true, 'RosterPage.ironmanItem');

    var deadpoolItem = await RosterPage.deadpoolItem;
    assert.strictEqual(await deadpoolItem.isDisplayed(), true, 'RosterPage.deadpoolItem');

    var thorItem = await RosterPage.thorItem;
    assert.strictEqual(await thorItem.isDisplayed(), true, 'RosterPage.thorItem');

    var spidermanItem = await RosterPage.spidermanItem;
    assert.strictEqual(await spidermanItem.isDisplayed(), true, 'RosterPage.spidermanItem');

    var addHeroLabel = await RosterPage.addHeroLabel;
    assert.strictEqual(await addHeroLabel.isDisplayed(), true, 'RosterPage.addHeroLabel');

    var addHeroField = await RosterPage.addAHeroField;
    assert.strictEqual(await addHeroField.isDisplayed(), true, 'RosterPage.addHeroField');

    var submitButtonR = await RosterPage.submitButton;
    assert.strictEqual(await submitButtonR.isDisplayed(), true, 'RosterPage.submitButton');

    //Verify the Vote page
    var voteTitle = await VotePage.voteTitle;
    assert.strictEqual(await voteTitle.isDisplayed(), true, 'VotePage.VoteTitle');

    var voteItem1 = await VotePage.voteItem1;
    assert.strictEqual(await voteItem1.isDisplayed(), true, 'VotePage.voteItem1');

    var voteItem2 = await VotePage.voteItem2;
    assert.strictEqual(await voteItem2.isDisplayed(), true, 'VotePage.voteItem2');

    var voteItem3 = await VotePage.voteItem3;
    assert.strictEqual(await voteItem3.isDisplayed(), true, 'VotePage.voteItem3');

    var voteItem4 = await VotePage.voteItem4;
    assert.strictEqual(await voteItem4.isDisplayed(), true, 'VotePage.voteItem4');

    var voteItem5 = await VotePage.voteItem5;
    assert.strictEqual(await voteItem5.isDisplayed(), true, 'VotePage.voteItem5');

    var voteItemLabel1 = await VotePage.voteItemLabel1;
    assert.strictEqual(await voteItemLabel1.isDisplayed(), true, 'VotePage.voteItemLabel1');

    var voteItemLabel2 = await VotePage.voteItemLabel2;
    assert.strictEqual(await voteItemLabel2.isDisplayed(), true, 'VotePage.voteItemLabel2');

    var voteItemLabel3 = await VotePage.voteItemLabel3;
    assert.strictEqual(await voteItemLabel3.isDisplayed(), true, 'VotePage.voteItemLabel3');

    var voteItemLabel4 = await VotePage.voteItemLabel4;
    assert.strictEqual(await voteItemLabel4.isDisplayed(), true, 'VotePage.voteItemLabel4');

    var voteItemLabel5 = await VotePage.voteItemLabel5;
    assert.strictEqual(await voteItemLabel5.isDisplayed(), true, 'VotePage.voteItemLabel5');

    var submitBvoteSubmitButton = await VotePage.voteSubmitButton;
    assert.strictEqual(await submitBvoteSubmitButton.isDisplayed(), true, 'VotePage.VoteSubmitButton');

    var voteItemText1 = await VotePage.voteItemText1;
    assert.strictEqual(await voteItemText1.isDisplayed(), true, 'VotePage.voteItemText1');

    var voteItemValue1 = await VotePage.voteItemValue1;
    assert.strictEqual(await voteItemValue1.isDisplayed(), true, 'VotePage.voteItemValue1');

    var voteItemText2 = await VotePage.voteItemText2;
    assert.strictEqual(await voteItemText2.isDisplayed(), true, 'VotePage.voteItemText2');

    var voteItemValue2 = await VotePage.voteItemValue2;
    assert.strictEqual(await voteItemValue2.isDisplayed(), true, 'VotePage.voteItemValue2');

    var voteItemText3 = await VotePage.voteItemText3;
    assert.strictEqual(await voteItemText3.isDisplayed(), true, 'VotePage.voteItemText3');

    var voteItemValue3 = await VotePage.voteItemValue3;
    assert.strictEqual(await voteItemValue3.isDisplayed(), true, 'VotePage.voteItemValue3');

    var voteItemText4 = await VotePage.voteItemText4;
    assert.strictEqual(await voteItemText4.isDisplayed(), true, 'VotePage.voteItemText4');

    var voteItemValue4 = await VotePage.voteItemValue4;
    assert.strictEqual(await voteItemValue4.isDisplayed(), true, 'VotePage.voteItemValue4');

    var voteItemText5 = await VotePage.voteItemText5;
    assert.strictEqual(await voteItemText5.isDisplayed(), true, 'VotePage.voteItemText5');

    var voteItemValue5 = await VotePage.voteItemValue5;
    assert.strictEqual(await voteItemValue5.isDisplayed(), true, 'VotePage.voteItemValue5');

    await browser.pause(2000);
  });
});
