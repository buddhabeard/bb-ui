import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'blog-cards',
  shadow: true,
})
export class BlogCards {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
