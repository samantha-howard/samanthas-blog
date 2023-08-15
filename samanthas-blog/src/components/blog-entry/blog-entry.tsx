import { Component, Host, Prop, getAssetPath, h, State } from '@stencil/core';
import { BlogEntryItem } from '../../utils/interfaces';
import { state } from '../../utils/store';

@Component({
  tag: 'blog-entry',
  styleUrl: 'blog-entry.scss',
  shadow: true,
  assetsDirs: ["assets"]
})
export class BlogEntry {
  /**
   * The fileName for the entry, this should match something in state.blogEntryPaths
   * @category Public
   */
  @Prop({ reflect: true }) name: string;

  /**
   * The stringified markdown for the entry
   * @category Private
   */
  @State() markdown: string;

  async componentWillLoad() {
    try {
      const fileName = state.blogEntries.find((entry: BlogEntryItem) => entry.name === this.name).name;
      const entry = await fetch(getAssetPath(`../../assets/blog-entries/${fileName}`));
      this.markdown = await entry.text();
    } catch (error) {
      // no-op
    }
  }

  /**
   * Renders the home page and subsequent components
   * @category Private
   * @returns {VNode} the rendered page
   */
  render() {
    return (
      <Host>
        <div innerHTML={this.markdown}></div>
      </Host>
    );
  }
}