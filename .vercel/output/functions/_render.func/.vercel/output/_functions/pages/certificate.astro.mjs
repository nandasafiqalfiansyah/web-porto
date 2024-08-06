import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DUJsmr6u.mjs';
import 'kleur/colors';
import { b as buttonVariants, $ as $$BaseLayout } from '../chunks/BaseLayout_CEOvOXdf.mjs';
export { renderers } from '../renderers.mjs';

const $$Certificate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-[80vh] flex-auto flex-col"> <div class="mt-8 flex flex-col items-center justify-center px-8"> <p class="text-sm text-muted-foreground">soon</p> <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
Page soon
</h1> <p class="mb-4 leading-7 [&:not(:first-child)]:mt-6">
Sorry, we couldn't find the page you're looking for.
</p> <a href="/" rel="noreferrer"${addAttribute(buttonVariants(), "class")}> Go back home</a> </div> </main> ` })}`;
}, "C:/Users/USER/Documents/GitHub/Final-Porto/astro-portfolio/src/pages/certificate.astro", void 0);

const $$file = "C:/Users/USER/Documents/GitHub/Final-Porto/astro-portfolio/src/pages/certificate.astro";
const $$url = "/certificate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Certificate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
