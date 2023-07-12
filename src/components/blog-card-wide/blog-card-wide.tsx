import { Component, Host, Prop, h } from '@stencil/core';
import { BlogCardProps } from '../../types/Card';

@Component({
  tag: 'blog-card-wide',
})
export class BlogCardWide {
  @Prop() cardTitle: BlogCardProps['cardTitle'];
  @Prop() cardSummary: BlogCardProps['cardSummary'];
  @Prop() cardImage: BlogCardProps['cardImage'];
  @Prop() cardFooterText: BlogCardProps['cardFooterText'];
  @Prop() cardLink: BlogCardProps['cardLink'];

  render() {
    return (
      <Host class="p-4 md:w-1/3 sm:mb-0 mb-6">
        {this.cardImage && (
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src={this.cardImage} />
          </div>
        )}

        {this.cardTitle && <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{this.cardTitle}</h2>}

        {this.cardSummary && <p class="text-base leading-relaxed mt-2">{this.cardSummary}</p>}

        <a class="text-pink-500 inline-flex items-center mt-3" href={this.cardLink}>
          {this.cardFooterText || 'Learn More'}
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </Host>
    );
  }
}
