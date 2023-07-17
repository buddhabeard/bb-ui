import { newSpecPage } from '@stencil/core/testing';
import { BasicCta } from '../basic-cta';

describe('basic-cta', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BasicCta],
      html: `<basic-cta></basic-cta>`,
    });
    expect(page.root).toEqualHtml(`
      <basic-cta>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </basic-cta>
    `);
  });
});
