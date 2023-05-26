import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  presets: [presetAttributify({}), presetIcons({}), presetUno()],
});
