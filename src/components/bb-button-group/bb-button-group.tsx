import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bb-button-group',
  styleUrl: 'bb-button-group.css',
  shadow: true,
})
export class BbButtonGroup {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
