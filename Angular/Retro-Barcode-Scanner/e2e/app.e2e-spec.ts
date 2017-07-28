import { RetroBarcodeScannerPage } from './app.po';

describe('retro-barcode-scanner App', () => {
  let page: RetroBarcodeScannerPage;

  beforeEach(() => {
    page = new RetroBarcodeScannerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
