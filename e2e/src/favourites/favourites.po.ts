import { browser, by, element } from 'protractor';

export class FavouritesPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/favourites') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
