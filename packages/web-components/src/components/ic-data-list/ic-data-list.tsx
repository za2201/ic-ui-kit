import { Component, Element, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "ic-data-list",
  styleUrl: "ic-data-list.css",
  shadow: true,
})
export class DataList {
  @Element() el: HTMLIcDataListElement;

  /**
   * Title for the data list
   */
  @Prop() heading: string;

  /**
   * Set the data heading and all child data rows to small styling
   */
  @Prop() small: boolean = false;

  render() {
    const { heading, small } = this;

    const children = this.el.children;

    if (small) {
      for (let i = 0; i < children.length; i++) {
        children[i].setAttribute("small", "true");
      }
    }

    return (
      <Host class={{ ["small"]: small }}>
        <div class="heading" id="data-list-heading">
          <slot name="heading">
            <ic-typography variant="h3">{heading}</ic-typography>
          </slot>
        </div>
        <div class="divider" />
        <ul aria-labelledby="data-list-heading" class="rows">
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
