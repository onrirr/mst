import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      // plugins: [
      //   starlightUtils({
      //     multiSidebar: {
      //       switcherStyle: "horizontalList",
      //     },
      //   }),
      // ],
      title: "Türkoluş",
      defaultLocale: "tr",

      locales: {
        tr: {
          label: "Türkçe",
          direction: "ltr",
          lang: "tr",
        },
        uz: {
          label: "O'zbek",
          direction: "ltr",
          lang: "uz",
        },
      },
      customCss: ["./src/styles/global.css"],
      sidebar: [],
    }),
  ],
});
