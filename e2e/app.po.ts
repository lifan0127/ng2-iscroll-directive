export class Ng2IscrollDirectivePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-iscroll-directive-app h1')).getText();
  }
}
