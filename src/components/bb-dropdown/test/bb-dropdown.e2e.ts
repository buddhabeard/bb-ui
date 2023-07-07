import { newE2EPage } from '@stencil/core/testing';

describe('bb-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bb-dropdown></bb-dropdown>');

    const element = await page.find('bb-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
