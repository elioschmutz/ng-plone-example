import { NgPloneExamplePage } from './app.po';

describe('ng-plone-example App', () => {
  let page: NgPloneExamplePage;

  beforeEach(() => {
    page = new NgPloneExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
