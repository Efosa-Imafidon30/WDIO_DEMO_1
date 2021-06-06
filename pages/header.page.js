class HeaderPage {
  get hamburgerMenu() {
    return $('body > div.row > div > nav > button');
  }

  get logoutButton() {
    return $('#navbarSupportedContent > ul > li:nth-child(4) > a');
  }

  get linkLink() {
    return $('#navbarSupportedContent > ul > li:nth-child(2) > a');
  }

  get heroFactsLink() {
    return $('#navbarDropdown');
  }

  get wolverineOption() {
    return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)');
  }

  get spidermanOption() {
    return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)');
  }

  get searchField() {
    return $('#search-box');
  }

  get searchButton() {
    return $('#search-form > button');
  }

  //Model window locators

  get wolverineModelWindow() {
    return $('#wolverineModal > div > div');
  }

  get wolverineModelTitleText() {
    return $('#wolverineModalLabel');
  }

  get wolverineModelContentText() {
    return $('#wolverineModal > div > div > div.modal-body');
  }

  get wolverineModelCloseButton() {
    return $('#wolverineModal > div > div > div.modal-footer > button');
  }

  get spidermanModelWindow() {
    return $('#spidermanModal > div > div');
  }

  get spidermanModelTitleText() {
    return $('#spidermanModalLabel');
  }

  get spidermanModelContentText() {
    return $('#spidermanModal > div > div > div.modal-body');
  }

  get spidermanModelCloseButton() {
    return $('#spidermanModal > div > div > div.modal-footer > button');
  }

  async clickOnLogoutButton() {
    await (await this.logoutButton).click();
  }

  async clickOnLink() {
    await (await this.linkLink).click();
  }

  async clickOnHeroFactLink() {
    await (await this.heroFactsLink).click();
  }

  async clickOnWolverineOption() {
    await (await this.wolverineOption).click();
  }

  async clickOnSpidermanOption() {
    await (await this.spidermanOption).click();
  }

  async enterIntoSearchField(search) {
    await (await this.searchField).setValue(search);
  }

  async clickOnSearcButton() {
    await (await this.searchButton).click();
  }

  async _wolverineModelWindow() {
    await this.wolverineModelWindow;
  }

  async _wolverineModelTitleText() {}

  async _wolverineModelContentText() {}

  async _wolverineModelCloseButton() {
    await (await this.wolverineModelCloseButton).click();
  }

  async _spidermanModelWindow() {}

  async _spidermanModelTitleText() {}

  async _spidermanModelContentText() {}

  async _spidermanModelCloseButton() {
    await (await this.spidermanModelCloseButton).click();
  }
}

module.exports = new HeaderPage();
