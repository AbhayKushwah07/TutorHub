const express = require("express");
var uniqid = require("uniqid");
const con = require("../db");

const router = express.Router();
//  const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');

const fetchuser = require("../middleware/fetchuser");

// const JWT_SECRET = 'Abhayyisagoodb$oy';

router.post("/addcourse", fetchuser, async (req, res) => {
  try {
    const {
      subject,
      mode,
      timing,
      duration,
      description,
      fixfee,
      varfee,
      location,
      title,
      t_name,
      Class
      
    } = req.body;

    const courseid = uniqid("C-");
    const t_email = req.user.id;
    
    async function main() {
      const query = `INSERT INTO course (subject,	mode,	timing,	duration,	description	,t_email,	fixfee,	varfee	,location	,courseid,title,t_name,class	) VALUES ('${subject}','${mode}','${timing}','${duration}','${description}','${t_email}','${fixfee}','${varfee}','${location}','${courseid}','${title}','${t_name}','${Class}')`;
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        res.json("done");
      });
    }

    setTimeout(() => {
      main();
    }, 150);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});






  router.put('/updatecourse/:id', fetchuser, async (req, res) => {

    try {
      const {subject,mode,timing,duration,description,location,fixfee,varfee,title,t_name,Class} = req.body;
      const courseid=req.params.id;

      async function main() {
        const query =`UPDATE course SET subject='${subject}',mode='${mode}',timing='${timing}',duration='${duration}',description='${description}',location='${location}',fixfee="${fixfee}",varfee="${varfee}",title="${title}",t_name="${t_name}",class="${Class}" WHERE courseid ="${courseid}";`;
        con.query(query, function (err, result, fields) {
          if (err) throw err;
          res.json(result);
        });
      }
  
      setTimeout(() => {
        main();
      }, 50);

       
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.delete('/deletecourse/:id', fetchuser,  async (req, res) => {

    try {
      const courseid=req.params.id;

      async function main() {
        const query =`DELETE FROM course WHERE courseid="${courseid}";`;
        con.query(query, function (err, result, fields) {
          if (err) throw err;
          res.json(result);
        });
      }
  
      setTimeout(() => {
        main();
      }, 50);
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })



  
router.delete('/deletecourseT/:id', fetchuser,  async (req, res) => {

  try {
    const email=req.params.id;

    async function main() {
      const query =`DELETE FROM course WHERE t_email="${email}";`;
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      });
    }

    setTimeout(() => {
      main();
    }, 50);
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
  
  
  router.get("/getcourse", fetchuser, async (req, res) => {
    try {
    
      
      con.query(
        `SELECT * FROM course`,
        function (err, result, fields) {
          
          if (err) throw err;
          res.send(result);
        }
        );
        
        
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
    });
    router.get("/getteachercourse", fetchuser, async (req, res) => {
      const email=req.user.id;
      try {
    
        
        con.query(
          `SELECT subject,title,description,subject,timing,duration,location,fixfee,varfee,mode,t_name,courseid,class FROM course WHERE t_email="${email}"`,
          function (err, result, fields) {
            
            if (err) throw err;
            res.send(result);
          }
    );
   
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


router.get("/getparticularcourse/:id", fetchuser, async (req, res) => {
  const id=req.params.id;
  try {
    
    
    con.query(
      `SELECT * FROM course WHERE courseid="${id}" `,
      function (err, result, fields) {
  
        if (err) throw err;
        res.send(result[0]);
      }
    );
   
  
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;