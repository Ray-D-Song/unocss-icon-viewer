<template>
  <div
    class="dark:bg-[#181818] bg-[#ffffff] w-full h-40 rounded-lg overflow-y-scroll"
  >
    <div class="grid grid-cols-6 gap-4">
      <template
        :key="item"
        v-for="(item, index) in Object.keys(icons.icons).slice(0, 40)"
      >
        <div
          class="flex flex-col items-center justify-center cursor-pointer p-4px dark:hover:bg-[#2A2A2A] hover:bg-[#EBEAEA]"
          @click="setIcon(item)"
        >
          <div :class="`mb-2px i-${icons.prefix}-${item}`"></div>
          <div class="text-xs text-center">{{ item }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import "virtual:uno.css";
import { icons } from "@iconify-json/fe/index";

export interface UnoIconViewerProps {
  icon: string;
  setIcon: (icon: string) => void;
}

export default defineComponent({
  name: "uno-icon-viewer",

  props: ["setIcon"],

  data() {
    return { icons };
  },
});
</script>