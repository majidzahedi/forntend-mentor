export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Frontend Mentor",
  // TODO? think about description.
  description: "some dummy description :>",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    newsLetter: "newsletter-sign-up-form",
  },
  challenges: [
    {
      title: "Newsletter Sign-up Form With Success Message",
      description:
        "This will test your skills with basic form structure, validation,and submission. The success state will also be an excellent opportunity to work with DOM manipulation.",
      imgSrc: "newsletter/design/desktop-design.jpg",
      url: "newsletter-sign-up-form",
    },
  ],
}
