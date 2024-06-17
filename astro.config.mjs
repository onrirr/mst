import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightUtils({
          multiSidebar: {
            switcherStyle: "horizontalList",
          },
        }),
      ],
      title: "Modern Standart Turkic",
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Morphology",
          autogenerate: { directory: "morphology" },
        },
        {
          label: "Dictionary",
          autogenerate: { directory: "dictionary" },
        },
      ],
    }),
  ],
});
