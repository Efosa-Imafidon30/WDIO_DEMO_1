const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Roster Test Suite', () => {
  it('should have default values', async () => {
    await browser.url('');

    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');

    await LoginPage.clickOnSubmitButton();

    var instructions =
      'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.';

    var expectedTitle = 'Build Your Superhero Roster:';

    var instructionsText = await RosterPage.instructionText;
    assert.strictEqual(await instructionsText.getText(), instructions, 'Instruction text is not the same');

    var title = await RosterPage.listTitle;
    assert.strictEqual(await title.getText(), expectedTitle, 'List title not the same');

    var wolverine = await RosterPage.wolverineItem;
    assert.strictEqual(await wolverine.getText(), 'Wolverine', 'Wolverine text are not the same');

    var ironman = await RosterPage.ironmanItem;
    assert.strictEqual(await ironman.getText(), 'Iron Man', 'Iron Man text are not the same');

    var deadpool = await RosterPage.deadpoolItem;
    assert.strictEqual(await deadpool.getText(), 'Deadpool', 'Deadpool text are not the same');

    var thor = await RosterPage.thorItem;
    assert.strictEqual(await thor.getText(), 'Thor', 'Thor text are not the same');

    var spiderman = await RosterPage.spidermanItem;
    assert.strictEqual(await spiderman.getText(), 'Spider-Man', 'Spiderman text are not the same');

    var addASuperHero = await RosterPage.addHeroLabel;
    assert.strictEqual(await addASuperHero.getText(), 'ADD A SUPERHERO', 'Add hero text is not the same');

    var placeHolder = await RosterPage.addAHeroField;

    assert.strictEqual(await placeHolder.getAttribute('placeholder'), 'Enter Hero', 'place holder text not the same');
  });

  it('should test something else', async () => {
    var newItemName = 'Flash';
    await browser.url('');

    await LoginPage.enterEmail('1@2.com');
    await LoginPage.enterPassword('password');

    await LoginPage.clickOnSubmitButton();

    await RosterPage.enterHero(newItemName);
    await RosterPage.clickOnSubmitButton();

    var newItem = await RosterPage.newItem;
    assert.strictEqual(await newItem.getText(), newItemName, 'New item is not added');
  });
});
