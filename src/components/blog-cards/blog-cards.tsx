import { Component, h } from '@stencil/core';

@Component({
  tag: 'blog-cards',
})
export class BlogCards {
  render() {
    return (
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <slot />
          </div>
        </div>
      </section>
    );
  }
}
