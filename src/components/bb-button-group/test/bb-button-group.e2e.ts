import { newE2EPage } from '@stencil/core/testing';

describe('bb-button-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bb-button-group></bb-button-group>');

    const element = await page.find('bb-button-group');
    expect(element).toHaveClass('hydrated');
  });
});
