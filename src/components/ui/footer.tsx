import { Link } from "@tanstack/react-router";

import { sitemaps } from "@/constant/fake-data";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-xl px-8 py-24 flex justify-between">
      <div className="space-y-4 max-w-lg">
        <div className="flex items-center gap-x-1">
          <img src="/logo.svg" className="w-10 h-10" alt="footer-logo" />
          <p className="text-xl font-sora font-semibold">Kiys</p>
        </div>
        <p>
          &quot;Empowering your tech experience with premium keyboards, mice,
          and TWS solutions. Elevate your setup with us!&quot;
        </p>
      </div>
      <div className="flex gap-x-12">
        {sitemaps.map((sitemap) => {
          return (
            <div key={sitemap.title} className="space-y-4">
              <h1 className="font-semibold">{sitemap.title}</h1>
              {sitemap.submenu.map((submenu) => {
                return (
                  <div key={submenu.href} className="gap-y-2 flex flex-col">
                    <Link to={submenu.href}>{submenu.title}</Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
