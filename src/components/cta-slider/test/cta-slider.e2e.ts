import { newE2EPage } from '@stencil/core/testing';

describe('cta-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cta-slider></cta-slider>');

    const element = await page.find('cta-slider');
    expect(element).toHaveClass('hydrated');
  });
});
