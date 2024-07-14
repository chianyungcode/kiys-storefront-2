type SitemapSubmenu = {
  title: string;
  href: string;
};

type Sitemap = {
  title: string;
  submenu: SitemapSubmenu[];
};

export const sitemaps: Sitemap[] = [
  {
    title: "Kiys",
    submenu: [
      {
        title: "About us",
        href: "/about",
      },
      {
        title: "Career",
        href: "/career",
      },
    ],
  },
  {
    title: "Information",
    submenu: [
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        title: "Terms and Condition",
        href: "/terms-and-condition",
      },
      {
        title: "FAQ",
        href: "/frequently-ask-question",
      },
    ],
  },
  {
    title: "Promotion",
    submenu: [
      {
        title: "Newsletter",
        href: "/newsletter",
      },
      {
        title: "Discount",
        href: "/discount",
      },
    ],
  },
];
