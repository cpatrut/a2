import { ComponetsPage } from './app.po';

describe('componets App', () => {
  let page: ComponetsPage;

  beforeEach(() => {
    page = new ComponetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
