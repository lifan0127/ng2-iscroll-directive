import { Ng2IscrollDirectivePage } from './app.po';

describe('ng2-iscroll-directive App', function() {
  let page: Ng2IscrollDirectivePage;

  beforeEach(() => {
    page = new Ng2IscrollDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-iscroll-directive works!');
  });
});
