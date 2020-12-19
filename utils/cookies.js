/* eslint-disable no-useless-escape */

/**
 * @helper cookies
 * manage the app's cookise
 */
export default {
  getItem(key) {
    return decodeURIComponent(window.document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
  },
  setItem(key, value, { path = '/', domain = null, secure = true, expire = 7 } = {}) {
    if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
      return false
    }

    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + expire)
    const expireString = 'expires=' + expiryDate.toUTCString()
    const domainString = (domain ? `domain=${domain};` : '')

    // eslint-disable-next-line no-console
    console.log(`${encodeURIComponent(key)}=${encodeURIComponent(value)}; ${expireString}; ${domainString} path=${path}; ${(secure ? ' secure' : '')}`)
    window.document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; ${expireString}; ${domainString} path=${path}; ${(secure ? ' secure' : '')}`
  },
  removeItem(key, path = '/', domain = null) {
    if (!key || !this.hasItem(key)) {
      return false
    }

    window.document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; ${(domain ? `domain=${domain};` : '')}${(path ? `path=${path}` : '')}`
    return true
  },
  hasItem(key) {
    return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(window.document.cookie)
  },
  keys() {
    const aKeys = window.document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/)
    for (let nIdx = 0; nIdx < aKeys.length; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx])
    }
    return aKeys
  }
}
