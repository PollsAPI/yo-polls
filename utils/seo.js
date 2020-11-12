import { SiteConfig } from '../site.config'

export const SiteTitle = SiteConfig.title
export const SiteDescription = SiteConfig.description
export const SEO = {
    title: SiteTitle,
    description: SiteDescription,
    openGraph: {
        url: SiteConfig.url,
        title: SiteTitle,
        description: SiteDescription,
        images: [{ url: SiteConfig.image }],
    },
    twitter: {
        cardType: 'summary_large_image',
    },
}
