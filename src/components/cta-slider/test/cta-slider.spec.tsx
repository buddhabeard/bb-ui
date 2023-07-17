import { newSpecPage } from '@stencil/core/testing';
import { CtaSlider } from '../cta-slider';

describe('cta-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CtaSlider],
      html: `<cta-slider></cta-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <cta-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cta-slider>
    `);
  });
});
