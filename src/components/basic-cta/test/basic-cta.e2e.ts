import { newE2EPage } from '@stencil/core/testing';

describe('basic-cta', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<basic-cta></basic-cta>');

    const element = await page.find('basic-cta');
    expect(element).toHaveClass('hydrated');
  });
});
