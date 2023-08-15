import { Component, Host, h } from '@stencil/core';
import { loadBlogEntries } from '../../utils/store';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
  shadow: true,
})
export class HomePage {

  componentWillLoad() {
    this.initialize();
  }

  private initialize = () => {
    loadBlogEntries();
  }

  /**
   * Renders the home page and subsequent components
   * @category Private
   * @returns {VNode} the rendered page
   */
  render() {
    return (
      <Host>
        <blog-header></blog-header>
        <br/>
        <blog-entry-input></blog-entry-input>
        <br/>
        <blog-list></blog-list>
        <br/>
      </Host>
    );
  }
}