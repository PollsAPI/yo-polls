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
    additionalMetaTags: [
        {
            name: 'twitter:url',
            property: SiteConfig.url,
        },
        {
            name: 'twitter:description',
            property: SiteConfig.description,
        },
        {
            name: 'twitter:title',
            property: SiteConfig.title,
        },
        {
            name: 'twitter:card',
            property: `summary_large_image`,
        },
        {
            name: 'twitter:image',
            property: SiteConfig.image,
        },
    ],
}
