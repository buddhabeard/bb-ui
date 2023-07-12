import { newSpecPage } from '@stencil/core/testing';
import { BlogCardWide } from '../blog-card-wide';

describe('blog-card-wide', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogCardWide],
      html: `<blog-card-wide></blog-card-wide>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-card-wide>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-card-wide>
    `);
  });
});
