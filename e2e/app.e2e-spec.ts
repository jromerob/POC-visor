import { PocVisorPage } from './app.po';

describe('poc-visor App', () => {
  let page: PocVisorPage;

  beforeEach(() => {
    page = new PocVisorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
