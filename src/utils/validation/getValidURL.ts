function getValidURL(url: string) {
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
            return 'https://' + url;
      }
      return url;
}

export default getValidURL;
