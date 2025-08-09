import { defineConfig } from "unocss";
import presetWind4 from "@unocss/preset-wind4";
import { presetIcons } from "unocss";

export default defineConfig({
  presets: [presetWind4(), presetIcons()],
  shortcuts: [
    { btn: "flex items-center px-3 py-1 rounded duration-300" },
    { inp: "rounded px-2 py-1" },
    { headline: "font-bold text-2xl md:text-4xl" },
    { all0: "top-0 right-0 bottom-0 left-0" },
  ],
});
