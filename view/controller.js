const path = require('path');

exports.home = (req, res) => {

  let lan;

  if (req.query.lan == undefined) {
    lan = 'en'
  } else {
    lan = req.query.lan;
  }

  const title = {
    en: 'main page',
    zh: '首页'
  };

  res.render(path.join(__dirname, './home.html'), { lan, title });
}

exports.about = (req, res) => {
  let lan;

  if (req.query.lan == undefined) {
    lan = 'en'
  } else {
    lan = req.query.lan;
  }
  const title = {
    en: 'about',
    zh: '关于'
  };
  res.render(path.join(__dirname, './about.html'), { lan, title });
}

exports.contact = (req, res) => {
  let lan;

  if (req.query.lan == undefined) {
    lan = 'en'
  } else {
    lan = req.query.lan;
  }
  const title = {
    en: 'Contact',
    zh: '联系我们'
  };
  res.render(path.join(__dirname, './contact.html'), { lan, title });
}

exports.joinUs = (req, res) => {
  let lan;

  if (req.query.lan == undefined) {
    lan = 'en'
  } else {
    lan = req.query.lan;
  }
  const title = {
    en: 'Join Us',
    zh: '加入我们'
  };
  res.render(path.join(__dirname, './joinus.html'), { lan, title });
}

exports.team = (req, res) => {
  let lan;

  if (req.query.lan == undefined) {
    lan = 'en'
  } else {
    lan = req.query.lan;
  }
  const title = {
    en: 'Team',
    zh: '我们的团队'
  };
  res.render(path.join(__dirname, './team.html'), { lan, title });
}