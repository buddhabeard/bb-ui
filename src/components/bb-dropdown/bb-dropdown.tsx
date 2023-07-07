import { Component, Host, Prop, State, Watch, h } from '@stencil/core';

import type { Opt, Options } from './types';

@Component({
  tag: 'bb-dropdown',
  styleUrl: 'bb-dropdown.css',
  shadow: true,
})
export class BbDropdown {
  @Prop() options: Options = [];
  @Prop() placeholder: string = 'Start typing...';
  @State() showOptions: boolean = false;
  @State() selected: Opt = null;
  @State() query: string = '';

  setSelected(option: Opt) {
    this.selected = option;
    this.showOptions = false;
    this.query = '';
  }

  setQuery(e) {
    this.query = e.target.value;
  }

  @Watch('query')
  setShowOptions() {
    if (this.query.length >= 3) {
      this.showOptions = true;
    } else {
      this.showOptions = false;
    }
  }

  getListClass() {
    return `list ${this.showOptions ? 'show' : ''}`;
  }

  getSelectedDisplayValue() {
    return this.selected ? this.selected.label : '';
  }

  render() {
    return (
      <Host>
        <div>
          <input placeholder={this.placeholder} type="text" onInput={this.setQuery.bind(this)} value={this.getSelectedDisplayValue()} />
          <ul class={this.getListClass()}>
            {this.options.map((opt, i) => (
              <li key={i} onClick={() => this.setSelected(opt)}>
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      </Host>
    );
  }
}
