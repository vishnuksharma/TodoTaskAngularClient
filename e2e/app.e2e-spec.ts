import { ItgtestPage } from './app.po';

describe('itgtest App', () => {
  let page: ItgtestPage;

  beforeEach(() => {
    page = new ItgtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
