import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'bb-button',
  styleUrl: 'bb-button.css',
  shadow: true,
})
export class BbButton {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary';

  render() {
    return (
      <Host>
        <button class={`button ${this.variant || 'primary'}`}>
          <slot />
        </button>
      </Host>
    );
  }
}
