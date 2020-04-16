const router = require("express").Router();
const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// ==========
// AUTH ROUTH
// ==========
// show sign up form
router.get("/register", (req, res) => {
  res.render("users/register");
});

//handling user sign up
router.post("/register", (req, res) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.render("register");
      }
      passport.authenticate("local")(req, res, function () {
        res.redirect("/dogs/diseases");
      });
    }
  );
});

// LOGIN ROUTE
// render login form
router.get("/login", function (req, res) {
  res.render("users/login");
});
// login logic
// middleware
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dogs/diseases",
    failureRedirect: "/login",
  }),
  function (req, res) {}
);

// LOGOUT ROUTE
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
