import { newSpecPage } from '@stencil/core/testing';
import { BlogCardsWide } from '../blog-cards-wide';

describe('blog-cards-wide', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogCardsWide],
      html: `<blog-cards-wide></blog-cards-wide>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-cards-wide>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-cards-wide>
    `);
  });
});
