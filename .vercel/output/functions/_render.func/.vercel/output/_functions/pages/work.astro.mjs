import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, f as renderTransition, F as Fragment } from '../chunks/astro/server_DUJsmr6u.mjs';
import 'kleur/colors';
import { W as WORK, E as EXPERIENCE } from '../chunks/constants_BJIIgnJj.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CEOvOXdf.mjs';
import { $ as $$TopLayout, a as $$BottomLayout } from '../chunks/BottomLayout_C6VARwRK.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": WORK.TITLE, "description": WORK.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-[80vh] flex-auto flex-col"${addAttribute(renderTransition($$result2, "3ijahyyl", "fade"), "data-astro-transition-scope")}> ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"> ${WORK.TITLE} </h2> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <ul> ${EXPERIENCE.map((entry) => renderTemplate`<li class="animate mt-4 border-b border-black/10 py-8 first-of-type:mt-0 first-of-type:pt-0 last-of-type:border-none dark:border-white/25"> <div class="mb-4 text-sm uppercase"> ${entry.start} - ${entry.end} </div> <a${addAttribute(entry.link ?? "", "href")}${addAttribute(`font-semibold ${entry?.link ? "text-primary" : "text-foreground"}`, "class")}> ${entry.company} </a> <div class="text-sm font-semibold">${entry.position}</div> <article class="prose dark:prose-invert"> ${entry.tasks.map((i) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${i}` })}`)} </article> </li>`)} </ul> ` })} </main> ` })}`;
}, "C:/Users/USER/Documents/GitHub/Final-Porto/astro-portfolio/src/pages/work.astro", "self");

const $$file = "C:/Users/USER/Documents/GitHub/Final-Porto/astro-portfolio/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
