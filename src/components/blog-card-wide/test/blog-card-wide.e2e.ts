import { newE2EPage } from '@stencil/core/testing';

describe('blog-card-wide', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-card-wide></blog-card-wide>');

    const element = await page.find('blog-card-wide');
    expect(element).toHaveClass('hydrated');
  });
});
