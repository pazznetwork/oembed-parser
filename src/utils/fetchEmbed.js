// utils -> fetchEmbed

const fetch = require('node-fetch');

const fetchEmbed = async (url, provider, params) => {
  let {
    provider_name, // eslint-disable-line camelcase
    provider_url, // eslint-disable-line camelcase
    url: resourceUrl,
  } = provider;


  resourceUrl = resourceUrl.replace(/\{format\}/g, 'json');

  let link = `${resourceUrl}?format=json&url=${encodeURIComponent(url)}`;
  link = params && params.maxwidth ? `${link}&maxwidth=${params.maxwidth}` : link;
  link = params && params.maxheight ? `${link}&maxheight=${params.maxheight}` : link;

  const res = await fetch(link, {mode: 'no-cors'});
  const json = await res.json();
  json.provider_name = provider_name; // eslint-disable-line camelcase
  json.provider_url = provider_url; // eslint-disable-line camelcase
  return json;
};

module.exports = fetchEmbed;
