// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), icon()],
  site: "https://tree-d.github.io",
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  },
});
