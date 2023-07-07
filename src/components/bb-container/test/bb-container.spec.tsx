import { newSpecPage } from '@stencil/core/testing';
import { BbContainer } from '../bb-container';

describe('bb-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BbContainer],
      html: `<bb-container></bb-container>`,
    });
    expect(page.root).toEqualHtml(`
      <bb-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bb-container>
    `);
  });
});
