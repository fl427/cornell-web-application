const router = require('express').Router();
let Disease = require('../models/disease')



router.route('/').get((req, res) => {
  Disease.find()
      .then(diseases => res.json(diseases))
      .catch(err => res.status(400).json('Error: ' + err));
});



// Create ROUTE - add new disease
/* Students may need to upload new dog diseases*/
router.route('/create').post((req, res) => {
  // Get dat from form and add to diseases array

  const title = req.body.title;
  const description = req.body.description;

  const newDisease = new Disease({
    title,
    description,
  });

  newDisease.save()
      .then(() => res.json('Disease added!'))
      .catch(err => res.status(400).json('Error: ' + err));

});

// SHOW ROUTER - Show more info about one disease
router.route('/:id').get((req, res) => {
  Disease.findById(req.params.id)
      .then(disease => res.json(disease))
      .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE ROUTER
router.route('/:id').delete((req, res) => {
  //destroy disease
  Disease.findByIdAndDelete(req.params.id)
      .then(() => res.json('Disease deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE ROUTE
router.route('/update/:id').post((req, res) => {
  Disease.findById(req.params.id)
      .then(disease => {
        disease.title = req.body.title;
        disease.description = req.body.description;

        disease.save()
            .then(() => res.json('Disease updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

// Search Disease
router.route('/search').post((req, res, next) => {
    console.log(req.body);
    var diseaseTitle = new RegExp(req.body.title, 'i');

    Disease.findOne({ title: diseaseTitle }, function(err, disease) {
        if (err) return next(err);

        if (!disease) {
            console.log("Not Found");
            return res.status(404).send({ message: 'Disease not found.' });
            // res.send("Disease not found");

        } else {
            console.log(disease);
            res.send(disease);
        }

    });
});

module.exports = router;