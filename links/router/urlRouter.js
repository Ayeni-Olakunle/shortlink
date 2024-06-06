const express = require('express')
const router = express.Router()
const {
    getURL,
    postUrl,
} = require("../controller/urlController");

router.route("/:shortUrl").get(getURL);
router.route("/").post(postUrl);

module.exports = router