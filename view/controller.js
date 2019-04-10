const path = require('path');

let navList = [{ en: 'HOME', zh: '首页', url: 'home' },
{ en: 'TEAM', zh: '我们团队', url: 'team' },
{ en: 'ABOUT', zh: '关于我们', url: 'about' },
{ en: 'CONTACT', zh: '联系我们', url: 'contact' },
{ en: 'JOIN US', zh: '加入我们', url: 'joinus' },
{ en: 'ENGLISH', zh: '中文 (中国)', url: 'lan' }
];

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

  res.render(path.join(__dirname, './home.html'), { lan, title, navList });
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
  res.render(path.join(__dirname, './about.html'), { lan, title, navList });
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
  res.render(path.join(__dirname, './contact.html'), { lan, title, navList });
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
  res.render(path.join(__dirname, './joinus.html'), { lan, title, navList });
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
  res.render(path.join(__dirname, './team.html'), { lan, title, navList });
}

exports.switchLan = (req, res) => {
  res.end();
}