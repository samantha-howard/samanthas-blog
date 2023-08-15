import { Component, Host, h } from '@stencil/core';
import { HTMLClasses } from './resources';

@Component({
  tag: 'blog-header',
  styleUrl: 'blog-header.scss'
})
export class BlogHeader {

  private textToDisplay = "Samantha's Blog of Amazing Hobbies🏳️‍⚧️";

  /**
   * Renders the home page and subsequent components
   * @category Private
   * @returns {VNode} the rendered page
   */
  render() {
    return (
      <Host>
        <div class={HTMLClasses.border}>
          <h1 class={HTMLClasses.banner}>
            {this.textToDisplay}
          </h1>
        </div>
      </Host>
    );
  }
}