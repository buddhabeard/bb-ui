import { Component, Host, Prop, h } from '@stencil/core';

export type CtaSliderProps = {
  heading: string;
  text: string;
};

@Component({
  tag: 'cta-slider',
})
export class CtaSlider {
  @Prop() heading: string;
  @Prop() text: string;

  render() {
    return (
      <Host class="flex flex-col">
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
          <div class="w-24 h-full bg-pink-500"></div>
        </div>
        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">{this.heading}</h1>
          <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{this.text}</p>
        </div>
      </Host>
    );
  }
}
