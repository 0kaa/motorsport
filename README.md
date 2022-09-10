# VisionFlo Frontend

### Setup and local development

```bash
# install dependencies
$ yarn install

# serve with hot reload for local development at http://localhost:3000
$ yarn dev


# serve UI component manager (Storybook) with hot reload at localhost:4000
$ yarn sb

```

### Build Setup for AWS

```bash
Will be updated soon.
```

## Docker

```bash
# build Docker image
docker build --tag vfappfrontend .

# run Docker image
docker run -it -p 3000:3000 vfappfrontend

# Push Docker Image
docker tag vfappfrontend visionflorepo/vfappfrontend
docker push visionflorepo/vfappfrontend
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org), [TailwindCSS docs](https://tailwindcss.com/) and [Storybook](https://storybook.js.org/).
