import { USTimeZonesPage } from './app.po';

describe('us-time-zones App', () => {
  let page: USTimeZonesPage;

  beforeEach(() => {
    page = new USTimeZonesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
