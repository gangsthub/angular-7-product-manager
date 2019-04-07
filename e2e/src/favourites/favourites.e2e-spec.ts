import { FavouritesPage } from './favourites.po';
import { browser, logging } from 'protractor';

describe('Favourites Page', () => {
  let page: FavouritesPage;

  beforeEach(() => {
    page = new FavouritesPage();
  });

  it('should display h1', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Favourites');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
