import { Component, Prop, Host, h } from '@stencil/core';
import { BlogCardProps } from '../../types/Card';

@Component({
  tag: 'blog-card',
})
export class BlogCard {
  @Prop() cardCategory: BlogCardProps['cardCategory'];
  @Prop() cardImage: BlogCardProps['cardImage'];
  @Prop() cardSummary: BlogCardProps['cardSummary'];
  @Prop() cardTitle: BlogCardProps['cardTitle'];
  @Prop() cardLink: BlogCardProps['cardLink'];
  @Prop() cardFooterText: BlogCardProps['cardFooterText'];

  render() {
    return (
      <Host class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {this.cardImage && <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={this.cardImage} alt={this.cardTitle || 'image'} />}

          <div class="p-6">
            {this.cardCategory && <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{this.cardCategory}</h2>}

            {this.cardTitle && <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{this.cardTitle}</h1>}

            {this.cardSummary && <p class="leading-relaxed mb-3">{this.cardSummary}</p>}

            <div class="flex items-center flex-wrap">
              <a class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0" href={this.cardLink}>
                {this.cardFooterText || 'Learn More'}
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
