class IntroPage {
  get titleText() {
    return $('body > div.container-fluid > div:nth-child(1) > h1');
  }

  get mainImage() {
    return $('body > div.container-fluid > div:nth-child(2) > img');
  }

  async getTitleText() {
    await (await this.titleText).getText();
  }

  async getMainImage() {
    await this.mainImage;
  }
}

module.exports = new IntroPage();
