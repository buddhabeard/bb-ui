import { newE2EPage } from '@stencil/core/testing';

describe('blog-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-card></blog-card>');

    const element = await page.find('blog-card');
    expect(element).toHaveClass('hydrated');
  });
});
