export default ({ app, $config }, inject) => {
  const DEFAULT_META = {
    title: app.i18n.t('meta_default_title'),
    description: app.i18n.t('meta_default_description'),
    image: `${$config.appHost}/banner.png`,
    baseURL: $config.appHost
  }

  /**
   * Generate necessary page meta data.
   * @param {object} metadata - the basic data to be generated
   * @param {string} metadata.title
   * @param {string} metadata.description
   * @param {string} metadata.image
   * @param {string} metadata.baseURL
   * @returns {(Array)} metadata compatible with most most web platforms e.g: google, facebook, twitter..etc
   */
  inject('getMetaTags', (data = {}) => {
    data = { ...DEFAULT_META, ...data }

    if (data.description.length > 255) {
      data.description = data.description.slice(0, 255).concat('...')
    }

    return [
      // main
      { hid: 'title', property: 'title', name: 'title', content: data.title },
      { hid: 'description', property: 'description', name: 'description', content: data.description },
      // open graph
      { hid: 'og:site_name', property: 'og:site_name', name: 'og:site_name', content: data.title },
      { hid: 'og:title', property: 'og:title', name: 'og:title', content: data.title },
      { hid: 'og:url', property: 'og:url', name: 'og:url', content: data.baseURL },
      { hid: 'og:description', property: 'og:description', name: 'og:description', content: data.description },
      { hid: 'og:type', property: 'og:type', name: 'og:type', content: 'website' },
      // image
      { hid: 'og:image', property: 'og:image', name: 'og:image', content: data.image },
      { hid: 'twitter:image', property: 'twitter:image', name: 'twitter:image', content: data.image },
      // twitter
      { hid: 'twitter:card', property: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:description', property: 'twitter:description', name: 'twitter:description', content: data.description },
      { hid: 'twitter:title', property: 'twitter:title', name: 'twitter:title', content: data.title },
      { hid: 'twitter:url', property: 'twitter:url', name: 'twitter:url', content: data.baseURL }
    ]
  })
}
