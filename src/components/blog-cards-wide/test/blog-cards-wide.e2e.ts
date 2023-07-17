import { newE2EPage } from '@stencil/core/testing';

describe('blog-cards-wide', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-cards-wide></blog-cards-wide>');

    const element = await page.find('blog-cards-wide');
    expect(element).toHaveClass('hydrated');
  });
});
