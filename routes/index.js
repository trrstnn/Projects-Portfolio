const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

router.get('/',(req,res) => {
    // const allProjects = projects.forEach(project => { return project;} )
    res.render(`index`,{projects});
});


router.get('/about',(req,res) => {
    res.render('about');
});

router.get('/projects/:id', (req, res) => {
    res.locals.project = projects[parseInt(req.params.id)];
    res.render('project');
});



module.exports = router;