import { newE2EPage } from '@stencil/core/testing';

describe('bb-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bb-button></bb-button>');

    const element = await page.find('bb-button');
    expect(element).toHaveClass('hydrated');
  });
});
