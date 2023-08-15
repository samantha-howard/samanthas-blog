import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'blog-header',
  styleUrl: 'blog-header.scss',
  shadow: true,
})
export class BlogHeader {

  private textToDisplay = "Blog Header";

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