import { CartAppPage } from './app.po';

describe('cart-app App', () => {
  let page: CartAppPage;

  beforeEach(() => {
    page = new CartAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
