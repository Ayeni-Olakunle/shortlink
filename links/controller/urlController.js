const urlModal = require("../model/urlModel")


const getURL = async (req, res) => {
    const { shortUrl } = req.params;

    try {
        const url = await urlModal.findOne({ shortUrl });
        if (url) {
          console.log(`Redirecting to: ${url.originalUrl}`);
          return res.redirect(url.originalUrl);
        } else {
          console.log('URL not found');
          return res.status(404).json({ message: 'URL not found' });
        }
      } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ message: 'Server error' });
      }
  };

  const postUrl = async (req, res) => {

    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(400).json({ message: 'URL is required' });
    }

    const urls = await urlModal.create({
        originalUrl: req.body.originalUrl,
      });
      res.status(200).json(urls);

      res.json({ shortUrl: `${req.headers.host}/${urls.shortUrl}` });
      res.status(500).json({ message: 'Server error' });
  };

  module.exports = {
    getURL,
    postUrl,
  };