import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'blog-entry-input',
  styleUrl: 'blog-entry-input.scss',
  shadow: true,
})
export class BlogEntryInput {

  private textToDisplay = "Blog Entry Input";

  /**
   * Renders the home page and subsequent components
   * @category Private
   * @returns {VNode} the rendered page
   */
  render() {
    return (
      <Host>
        {this.textToDisplay}
      </Host>
    );
  }
}