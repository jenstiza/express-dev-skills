//only modules for models are named singularly.
const skills = [
    {id: 125223, skill: 'HTML/CSS', confident: true},
    {id: 127904, skill: 'Express', confident: false},
    {id: 139608, skill: 'Javascript', confident: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.confident = false;
    skills.push(skill);
  }

  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

