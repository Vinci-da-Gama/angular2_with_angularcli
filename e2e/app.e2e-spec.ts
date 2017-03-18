import { StartLearnA2Page } from './app.po';

describe('start-learn-a2 App', () => {
  let page: StartLearnA2Page;

  beforeEach(() => {
    page = new StartLearnA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
