import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bb-dropdown',
  styleUrl: 'bb-dropdown.css',
  shadow: true,
})
export class BbDropdown {
  render() {
    return (
      <Host>
        <div>
          <input type="text" />
          <bb-button variant="tertiary">click me</bb-button>
          <ul>
            <li>shit</li>
          </ul>
        </div>
      </Host>
    );
  }
}
