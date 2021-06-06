class VotePage {
  get voteTitle() {
    return $('body > div.container-fluid > div:nth-child(6) > div > h4');
  }
  //vote item radios buttons
  get voteItem1() {
    return $('#heroMovieRadio1');
  }

  get voteItem2() {
    return $('#heroMovieRadio2');
  }

  get voteItem3() {
    return $('#heroMovieRadio3');
  }

  get voteItem4() {
    return $('#heroMovieRadio4');
  }

  get voteItem5() {
    return $('#heroMovieRadio5');
  }

  //vote item labels
  get voteItemLabel1() {
    return $('#vote-form > div:nth-child(1) > label');
  }

  get voteItemLabel2() {
    return $('#vote-form > div:nth-child(2) > label');
  }

  get voteItemLabel3() {
    return $('#vote-form > div:nth-child(3) > label');
  }

  get voteItemLabel4() {
    return $('#vote-form > div:nth-child(4) > label');
  }

  get voteItemLabel5() {
    return $('#vote-form > div:nth-child(5) > label');
  }

  get voteSubmitButton() {
    return $('#vote-form > button');
  }

  //Movie title grid

  get voteItemText1() {
    return $('#movieName1');
  }

  get voteItemValue1() {
    return $('#movieVotes1');
  }

  get voteItemText2() {
    return $('#movieName2');
  }

  get voteItemValue2() {
    return $('#movieVotes2');
  }

  get voteItemText3() {
    return $('#movieName3');
  }

  get voteItemValue3() {
    return $('#movieVotes3');
  }

  get voteItemText4() {
    return $('#movieName4');
  }

  get voteItemValue4() {
    return $('#movieVotes4');
  }

  get voteItemText5() {
    return $('#movieName5');
  }

  get voteItemValue5() {
    return $('#movieVotes5');
  }

  async clickOnVoteSubmitButton() {
    await (await this.voteSubmitButton).click();
  }

  get thanksAlert() {
    return $('#vote-alert');
  }
}

module.exports = new VotePage();
