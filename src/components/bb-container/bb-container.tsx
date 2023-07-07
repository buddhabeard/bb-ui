import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bb-container',
  styleUrl: 'bb-container.css',
  shadow: true,
})
export class BbContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
