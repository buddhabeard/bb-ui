import { newSpecPage } from '@stencil/core/testing';
import { BlogCard } from '../blog-card';

describe('blog-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogCard],
      html: `<blog-card></blog-card>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-card>
    `);
  });
});
