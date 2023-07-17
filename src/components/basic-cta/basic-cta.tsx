import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'basic-cta',
})
export class BasicCta {
  @Prop() headingText: string;
  @Prop() buttonText: string;

  render() {
    return (
      <Host class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">{this.headingText}</h1>
            <button class="flex-shrink-0 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">{this.buttonText}</button>
          </div>
        </div>
      </Host>
    );
  }
}
