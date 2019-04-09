const path = require('path');

exports.home = function (req, res) {
  const { language } = req.params;
  const title = {
    en: 'main page',
    zh: '首页'
  };

  console.log(req);
  console.log(language, title);

  res.render(path.join(__dirname, './home.html'), { language, title });
}