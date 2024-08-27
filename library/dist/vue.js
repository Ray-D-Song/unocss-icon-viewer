import { defineComponent as a, openBlock as s, createElementBlock as r, createElementVNode as t, Fragment as d, renderList as f, normalizeClass as p, toDisplayString as _ } from "vue";
import { i as u } from "./icons-CRKuchT_.js";
const v = a({
  name: "uno-icon-viewer",
  props: ["setIcon"],
  data() {
    return { icons: u };
  }
}), g = (e, c) => {
  const n = e.__vccOpts || e;
  for (const [i, l] of c)
    n[i] = l;
  return n;
}, m = { class: "dark:bg-[#181818] bg-[#ffffff] w-full h-40 rounded-lg overflow-y-scroll" }, k = { class: "grid grid-cols-6 gap-4" }, x = ["onClick"], h = { class: "text-xs text-center" };
function $(e, c, n, i, l, b) {
  return s(), r("div", m, [
    t("div", k, [
      (s(!0), r(d, null, f(Object.keys(e.icons.icons).slice(0, 40), (o, y) => (s(), r("div", {
        key: o,
        class: "flex flex-col items-center justify-center cursor-pointer p-4px dark:hover:bg-[#2A2A2A] hover:bg-[#EBEAEA]",
        onClick: (A) => e.setIcon(o)
      }, [
        t("div", {
          class: p(`mb-2px i-${e.icons.prefix}-${o}`)
        }, null, 2),
        t("div", h, _(o), 1)
      ], 8, x))), 128))
    ])
  ]);
}
const C = /* @__PURE__ */ g(v, [["render", $]]);
export {
  C as UnoIconViewer
};
