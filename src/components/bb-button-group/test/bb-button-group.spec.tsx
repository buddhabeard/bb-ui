import { newSpecPage } from '@stencil/core/testing';
import { BbButtonGroup } from '../bb-button-group';

describe('bb-button-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BbButtonGroup],
      html: `<bb-button-group></bb-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <bb-button-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bb-button-group>
    `);
  });
});
