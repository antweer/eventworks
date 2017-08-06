import { EventsmanagerPage } from './app.po';

describe('eventsmanager App', () => {
  let page: EventsmanagerPage;

  beforeEach(() => {
    page = new EventsmanagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
