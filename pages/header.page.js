class HeaderPage {
  get hamburgerMenu() {
    return $('body > div.row > div > nav > button');
  }

  get logoutButton() {
    return $('#navbarSupportedContent > ul > li:nth-child(4) > a');
  }
}

module.exports = new HeaderPage();
