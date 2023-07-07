import { newE2EPage } from '@stencil/core/testing';

describe('bb-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bb-container></bb-container>');

    const element = await page.find('bb-container');
    expect(element).toHaveClass('hydrated');
  });
});
