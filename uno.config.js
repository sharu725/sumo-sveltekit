import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  presets: [presetUno(), presetIcons({})],
  shortcuts: [
    { btn: "flex items-center px-3 py-1 rounded duration-300" },
    { inp: "rounded px-2 py-1" },
    { headline: "font-bold text-2xl md:text-4xl" },
    { all0: "top-0 right-0 bottom-0 left-0" },
  ],
});
