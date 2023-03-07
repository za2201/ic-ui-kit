import { newSpecPage } from "@stencil/core/testing";
import { MenuButton } from "./ic-menu-button";

describe("menu button variants", () => {
  it("should render the default variant", async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
            label="Default variant"
          />`,
    });

    expect(page.root).toMatchSnapshot();
  }),
    it("should render a menu button with a description", async () => {
      const page = await newSpecPage({
        components: [MenuButton],
        html: `<ic-menu-button
            label="Default variant"
            description="This is the default variant of the menu button with a description"
          />`,
      });

      expect(page.root).toMatchSnapshot();
    });
  it("should render the toggle variant", async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
            variant="toggle"
            label="Toggle variant"
          />`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it("should render the destructive variant", async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
            variant="destuctive"
            label="Destructive variant"
          />`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it("should render a menu button that triggers a popover menu instance", async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
            variant="destuctive"
            submenu-trigger-for="submenu-1"
            label="Destructive variant"
          />`,
    });

    expect(page.rootInstance.submenuTriggerFor).not.toBeUndefined();

    expect(page.rootInstance.variant).toMatch("default");
  });
  it("should set the active and focused states correctly", async () => {
    const page = await newSpecPage({
      components: [MenuButton],
      html: `<ic-menu-button
            variant="destuctive"
            label="Destructive variant"
          />`,
    });

    const root = page.root;

    root.dispatchEvent(new MouseEvent("mousedown"));
    expect(page.rootInstance.isActive).toBeTruthy();

    root.dispatchEvent(new MouseEvent("focusin"));
    expect(page.rootInstance.isFocused).toBeTruthy();

    root.dispatchEvent(new MouseEvent("mouseup"));
    expect(page.rootInstance.isActive).toBeFalsy();

    root.dispatchEvent(new MouseEvent("focusout"));
    expect(page.rootInstance.isFocused).toBeFalsy();
  });
  // it('should set the active and focused states correctly for touchscreen users', async () => {
  //   const page = await newSpecPage({
  //     components: [MenuButton],
  //     html: `<ic-menu-button
  //           variant="destuctive"
  //           label="Destructive variant"
  //         />`,
  //   });

  //   const root = page.root;

  //   root.dispatchEvent(new MouseEvent('touchstart'));
  //   expect(page.rootInstance.isActive).toBeTruthy();

  //   root.dispatchEvent(new MouseEvent('focusin'));
  //   expect(page.rootInstance.isFocused).toBeTruthy();

  //   root.dispatchEvent(new MouseEvent('touchend'));
  //   expect(page.rootInstance.isActive).toBeFalsy();

  //   root.dispatchEvent(new MouseEvent('focusout'));
  //   expect(page.rootInstance.isFocused).toBeFalsy();
  // });
});
