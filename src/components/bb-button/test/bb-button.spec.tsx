import { newSpecPage } from '@stencil/core/testing';
import { BbButton } from '../bb-button';

describe('bb-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BbButton],
      html: `<bb-button></bb-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bb-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bb-button>
    `);
  });
});
