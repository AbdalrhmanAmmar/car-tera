import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.car-tera.com", // لازم تكتب اسم الدومين الحقيقي
  integrations: [sitemap()],
});
