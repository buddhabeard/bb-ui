import { newSpecPage } from '@stencil/core/testing';
import { BlogCards } from '../blog-cards';

describe('blog-cards', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogCards],
      html: `<blog-cards></blog-cards>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-cards>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-cards>
    `);
  });
});
