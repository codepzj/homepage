import { ThemeSwitcher } from "@/components/theme-switcher";
import { SiteCard } from "@/components/card";
import { Icon } from "@iconify/react";
import { siteConfig } from "@/config/site.config";

export default function Home() {
  const { sitecards } = siteConfig;
  return (
    <div className="flex flex-col min-h-screen">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{siteConfig.title}</title>
      <meta name="description" content={siteConfig.description} />
      <meta name="keywords" content={siteConfig.keywords} />
      <meta name="author" content={siteConfig.author} />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
      <div className="flex-1">
        <header className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">{siteConfig.name}</h1>
          <ThemeSwitcher />
        </header>
        <div className="flex justify-center sm:justify-start flex-wrap gap-6 p-4">
          {sitecards.map((sitecard) => (
            <SiteCard
              key={sitecard.title}
              title={sitecard.title}
              description={sitecard.description}
              url={sitecard.url}
              icon={<Icon icon={sitecard.icon} className="w-5 h-5" />}
            />
          ))}
        </div>
      </div>
      {siteConfig.icp && (
        <footer className="text-center text-sm text-gray-500 mt-auto my-4">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
            {siteConfig.icp}
          </a>
        </footer>
      )}
    </div>
  )
}