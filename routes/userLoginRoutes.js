const express = require("express");
const router = express.Router();
const db = require("../Models");

// Bcrypt==========================
const bcrypt = require("bcrypt");

let hash = "$2b$10$69SrwAoAUNC5F.gtLEvrNON6VQ5EX89vNqLEqU655Oy9PeT/HRM/a";

//=======================================================================================

const redirectLogin = function (req, res, next) {
  console.log("REDIRECT SESSION: ", req.session);
  if (!req.session.userId) {
    res.redirect("/signUp");
  } else {
    next();
  }
};

router.get("/", function (req, res) {
  console.log("\n\nROUTER.GET SESSION: ", req.session);
  console.log("ROUTER.GET SESSION ID: ", req.session.id);
  console.log("ROUTER.GET userId: ", req.session.userId);

  // This will load title and description for each page separately=================================
  res.locals.metaTags = {
    title: "Fur Butlr",
    description: "A place where pet owners can find all their needs in one place!",
    keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
    bg: "index"
  };
  res.render("index", {
    layout: "main"
  });
});

router.get("/signUp", function (req, res) {
  // This will load title and description for each page separately=================================
  res.locals.metaTags = {
    title: "Sign Up for Fur Butlr",
    description: "A place where pet owners can find all their needs in one place!",
    keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
    bg: "sign-up"
  };
  res.render("signUp", {
    layout: "main"
  });
});

router.get("/userProfile", function (req, res) {
  console.log(req.query);
  console.log(req.query.id);
  const users = db.User.findAll({
    where: {
      id: req.query.id
    }
  });

  const pets = db.Pet.findAll({
    where: {
      // eslint-disable-next-line camelcase
      owner_id: req.query.id
    }
  });

  const reviews = db.Review.findAll({
    where: {
      // eslint-disable-next-line camelcase
      owner_id: req.query.id
    }
  });

  const posts = db.Post.findAll({
    where: {
      // eslint-disable-next-line camelcase
      owner_id: req.query.id
    }
  });

  Promise
    .all([users, pets, reviews, posts])
    .then(function (responses) {
      console.log("**********COMPLETE RESULTS****************");
      console.log(responses[0]); // user profile
      console.log(responses[1]); // all reports
      console.log(responses[2]); // report details
      console.log(responses[3]); // post details? maybe? 
      res.render("userProfile", {
        users: responses[0],
        pets: responses[1],
        reviews: responses[2],
        posts: responses[3]
      });
    })
    .catch(function (err) {
      console.log("**********ERROR RESULT****************");
      console.log(err);
    });


});

router.get("/testChange", function (req, res) {
  console.log(req.query);
  console.log(req.query.id);
  const users = db.User.findAll({
    where: {
      id: req.query.id
    }
  });

  const pets = db.Pet.findAll({
    where: {
      // eslint-disable-next-line camelcase
      owner_id: req.query.id
    }
  });

  const reviews = db.Review.findAll({
    where: {
      // eslint-disable-next-line camelcase
      author_id: req.query.id
    }
  });

  Promise
    .all([users, pets, reviews])
    .then(function (responses) {
      console.log("**********COMPLETE RESULTS****************");
      console.log(responses[0]); // user profile
      console.log(responses[1]); // all reports
      console.log(responses[2]); // report details
      res.render("testChange", {
        users: responses[0],
        pets: responses[1],
        reviews: responses[2],
      });

    })
    .catch(function (err) {
      console.log("**********ERROR RESULT****************");
      console.log(err);
    });

});

router.get("/profileResults", function (req, res) {
  console.log(req.query);
  console.log(req.query.role);
  res.locals.metaTags = {
    title: "Matches for you!",
    description: "A place where pet owners can find all their needs in one place!",
    keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
    bg: "results"
  };
  db.User.findAll({
    where: {
      role: req.query.role
    }
  })
    .then(function (users) {
      res.render("results", { users: users });
    })
    .catch(function (err) {
      console.log(err);
    });
});



router.get("/results", function (req, res) {
  // This will load title and description for each page separately=================================
  res.locals.metaTags = {
    title: "Matches for you!",
    description: "A place where pet owners can find all their needs in one place!",
    keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
    bg: "results"
  };
  res.render("results", {
    layout: "main"

  });
});

router.get("/dashboard", redirectLogin, function (req, res) {
  // This will load title and description for each page separately=================================
  res.locals.metaTags = {
    title: "Your profile",
    description: "A place where pet owners can find all their needs in one place!",
    keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
    bg: "dashboard"
  };
  res.render("dashboard", {
    layout: "main"
  });
  console.log("DASHBOARD SESSION: ", req.session);
  console.log("DASHBOARD userId: ", req.session.userId);
  // Here is where to push info to front-end=================================================
  // or may have to make a post route for dashboard=========================================
});

// Render 404 page for any unmatched routes
// router.get("*", function (req, res) {
//   res.render("404");
// });





//========================================================================================

// login route
router.post("/api/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  
console.log('\nSESSION: ', req.session + '\n');
  console.log("\nlogin details from userLoginRoutes: " + email + ", " + password + "\n");

  if (!email || !password) {
    console.log("No email/Pass");
    res.end();
  } else {
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function (dbUser) {
      console.log("USER: ", dbUser.dataValues);
      hash = dbUser.dataValues.password;
      // console.log("HASH: ", hash);
      bcrypt
        .compare(password, hash, (err, pwMatches) => {
          console.log("I'm the password manager", pwMatches);
          if (pwMatches) {
            console.log("dbUserPassword :", dbUser.dataValues.password);
            console.log("PASSWORD MATCHES");
            req.session.userId = dbUser.dataValues.id;
            console.log("SESSION Id: ", req.session.userId);

            const userObj = {
              id: dbUser.dataValues.id,
              firstName: dbUser.dataValues.first_name,
              lastName: dbUser.dataValues.last_name,
              clientType: dbUser.dataValues.client_type,
              email: dbUser.dataValues.email,
              image: dbUser.dataValues.image,
            };
            //we update the loggedIn key to have a true value. we can use this value on the fron end to see if the user is logged in or not.
            req.session.user.loggedIn = true;
            //here the session's user object is updated with the users data. we can hit our /session endpoing witha  get request from the front end and get our user object.
            req.session.user.currentUser = userObj;

            console.log("userObj from userLoginRoutes: ", userObj);
            console.log("\nlogged in: ", req.session.user.loggedIn);
            console.log("\ncurrent user from userLoginRoutes: ", req.session.user.currentUser);

            res.send({
              "code": 200,
              "success": "Login Successful"
            });
          } else {
            console.log("PASSWORD DOES NOT MATCH");
            res.end();
          }
        });
    });
  }
});

// Logout route
router.post("/api/logout", function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      return res.redirect("/dashboard");
    }
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
  console.log("LOGGED OUT");
});

module.exports = router;

