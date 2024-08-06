import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, f as renderTransition } from '../chunks/astro/server_DUJsmr6u.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CEOvOXdf.mjs';
import { $ as $$TopLayout, a as $$BottomLayout } from '../chunks/BottomLayout_C6VARwRK.mjs';
import { C as Card } from '../chunks/card_CNjJ_3-V.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    as: Tag = "a",
    class: className,
    href,
    heading,
    subheading,
    imagePath,
    altText
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "class": `${className}`, "`": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ShadcnCard", Card, { "className": `transfor-y-[-40%] align-start perspective-1200 group relative flex-none transform justify-start overflow-hidden shadow-lg transition duration-75 ease-in-out ${href ? "cursor-pointer hover:border-primary" : ""} ` }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<img${addAttribute(imagePath, "src")}${addAttribute(altText, "alt")} class="h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover" loading="eager"> <div class="flex flex-col gap-y-0.5 px-5 py-4"> <h1 class="text-lg font-medium">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> </div> ${renderSlot($$result3, $$slots["default"])} ` })} ` })}`;
}, "C:/Users/USER/Documents/GitHub/Final-Porto/astro-portfolio/src/components/ProjectCard.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const entries = {
    items: [
      {
        sys: {
          id: "1"
        },
        fields: {
          name: "Project One",
          img: {
            fields: {
              file: {
                url: "/path/to/image1.jpg"
              },
              title: "Image 1"
            }
          },
          website: "https://project-one.com",
          repositorio: "https://github.com/user/project-one"
        }
      },
      {
        sys: {
          id: "2"
        },
        fields: {
          name: "Project Two",
          img: {
            fields: {
              file: {
                url: "/path/to/image2.jpg"
              },
              title: "Image 2"
            }
          },
          website: "https://project-two.com",
          repositorio: "https://github.com/user/project-two"
        }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Portfolio", "description": "Projects and some clone's that I did" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-[80vh] flex-auto flex-col"${addAttribute(renderTransition($$result2, "v6yisl25", "slide"), "data-astro-transition-scope")}> ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
Projects and clone's
</h2> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="flex w-full flex-wrap justify-center gap-2"> ${entries.items.map((entry) => renderTemplate`${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "key": entry?.sys?.id, "href": entry?.fields?.website, "heading": entry?.fields?.name, "subheading": entry?.fields?.description, "imagePath": entry?.fields?.img?.fields?.file.url, "altText": entry?.fields?.img?.fields.title, "class": "w-full sm:w-2/5" })}`)} </div> ` })} </main> ` })}`;
}, "C:/Users/USER/Documents/GitHub/Final-Porto/astro-portfolio/src/pages/portfolio.astro", "self");

const $$file = "C:/Users/USER/Documents/GitHub/Final-Porto/astro-portfolio/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
