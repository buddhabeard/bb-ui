import { newE2EPage } from '@stencil/core/testing';

describe('blog-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-cards></blog-cards>');

    const element = await page.find('blog-cards');
    expect(element).toHaveClass('hydrated');
  });
});
