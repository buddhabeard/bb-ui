import { Component, h } from '@stencil/core';

@Component({
  tag: 'bb-button',
})
export class BbButton {
  render() {
    return (
      <button class="w-32 h-12 px-10 py-3.5 bg-blue-700 justify-center items-center gap-2.5 inline-flex">
        <div class="text-center text-white text-base font-semibold leading-tight">
          <slot></slot>
        </div>
      </button>
    );
  }
}
