import { newSpecPage } from '@stencil/core/testing';
import { BbDropdown } from '../bb-dropdown';

describe('bb-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BbDropdown],
      html: `<bb-dropdown></bb-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <bb-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bb-dropdown>
    `);
  });
});
