const Skill = require('../models/skill');

module.exports = {
    index,
    show
  };
  
 function index(req, res) {
     const skills = Skill.getAll();
    res.render('skills/index', { skills });
    console.log("hello");
  };

  function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
    console.log("goodbye"); 
  }

 