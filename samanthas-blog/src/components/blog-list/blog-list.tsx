import { Component, Host, h } from '@stencil/core';
import { state } from '../../utils/store';
import { BlogEntryItem } from '../../utils/interfaces';

@Component({
  tag: 'blog-list',
  styleUrl: 'blog-list.scss',
  shadow: true,
})
export class BlogList {

  /**
   * Renders the home page and subsequent components
   * @category Private
   * @returns {VNode} the rendered page
   */
  render() {
    return (
      <Host>
        {state.blogEntries.map((entry: BlogEntryItem) => {
          return (
            <blog-entry
              name={entry.name}
            ></blog-entry>
          );
        })}
      </Host>
    );
  }
}