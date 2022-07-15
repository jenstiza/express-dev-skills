//only modules for models are named singularly.
const skills = [
    {id: 125223, skill: 'HTML/CSS', confident: true},
    {id: 127904, skill: 'Express', confident: false},
    {id: 139608, skill: 'Javascript', confident: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

