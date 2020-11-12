export const SiteTitle = process.env.SITE_TITLE || `Yo! Polls | PollsAPI Demo Application`
export const SiteDescription =
    process.env.SITE_DESCRIPTION ||
    `Create and Share Polls instantly on Whatsapp, Snapchat, Messenger, iMessage and more with friends. Built using PollsAPI`
export const SEO = {
    title: SiteTitle,
    description: SiteDescription,
    openGraph: {
        url: process.env.SITE_URL,
        title: SiteTitle,
        description: SiteDescription,
        images: [
            {
                url:
                    'https://user-images.githubusercontent.com/812474/98913438-3776a880-247c-11eb-9dd2-cdda3ad4a239.png',
            },
        ],
    },
    additionalMetaTags: [
        {
            name: 'twitter:url',
            property: process.env.SITE_URL,
        },
        {
            name: 'twitter:description',
            property: SiteDescription,
        },
        {
            name: 'twitter:title',
            property: SiteTitle,
        },
        {
            name: 'twitter:card',
            property: `summary_large_image`,
        },
        {
            name: 'twitter:image',
            property: `https://user-images.githubusercontent.com/812474/98913438-3776a880-247c-11eb-9dd2-cdda3ad4a239.png`,
        },
    ],
}
