<h1 align="center">🤟 Yo! Polls</h1>
<p align="center">Demo polls application created using <strong><a href="https://www.pollsapi.com">PollsAPI</a></strong> built on <a href="https://www.nextjs.org">NextJS</a></p>

<div style="text-align: center;" align="center">
  <img align="center" src="https://user-images.githubusercontent.com/812474/98884971-024f6380-2446-11eb-8552-6b0db19719f8.png" />
</div>


## Deploy on Vercel (1-Click Deploy)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FpollsAPI%2Fyo-polls&env=API_KEY,SITE_URL,SITE_TITLE,SITE_DESCRIPTION&envDescription=API%20Key%20from%20PollsAPI&envLink=https%3A%2F%2Fwww.pollsapi.com&project-name=pollsapi-yo-polls&repository-name=pollsapi-yo-polls&demo-title=PollsAPI%20Sample%20Application%20%7C%20Yo!%20Polls&demo-description=Sample%20application%20from%20PollsAPI&demo-url=https%3A%2F%2Fyopolls.com&demo-image=https://user-images.githubusercontent.com/812474/98913438-3776a880-247c-11eb-9dd2-cdda3ad4a239.png)
-----

## Getting Started

> Project uses *Environment variable* - **API_KEY**
> To add it please add `.env.local` file at the root level and add following
> ```
> API_KEY=<API Key from PollsAPI>
> ```

### Getting the PollsAPI Key

This application is built using [PollsAPI](https://www.pollsapi.com) so to start off with it you would need to get the API Key for PollsAPI

*PollsAPI has a Free tier which you can use to get started.*

1. Login to PollsAPI - https://www.pollsapi.com/login
2. Once logged in grab your API Key from the Dashboard
3. Add the key as an `Environment Variable` by creating a `.env.local` file at the root level.

### Site Config

For SEO and link sharing, you can configure your Site's URL, Title, Description & Image attributes.
You can configure the SEO by updating the file - [site.config.js](./site.config.js).

### Development

Once setup with the repo locally and having the `.env.local` file added, you are all set to go ahead with our local setup.

Run:

```sh
# yarn
$ yarn
$ yarn dev

# npm
$ npm install
$ npm run dev
```

This is install all the dependencies and start a local development server running on port `3000` so you can access it on https://localhost:3000

#### Debug

Since NextJS enables the SSR debugging is really easy. Stop your server, if already running, and then start it by 

```sh
# yarn
$ yarn debug

# npm
$ npm run debug
```
This will run the server with debugging available on port `9570`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### SEO

For SEO, we have used `next-seo` and created a basic config for SEO.
Learn more about how to config `next-seo` - https://github.com/garmeeh/next-seo#usage 

## Learn More about NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

