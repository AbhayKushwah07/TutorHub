const express = require("express");

const con = require("../db");
const router = express.Router();
//  const { body, validationResult, check } = require('express-validator');
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const sendemail=require('../email');

const JWT_SECRET = "Abhayyisagoodb$oy";

router.post("/signup", async (req, res) => {
  var status = 0;
 
  try {
    const {
      email,
      name,
      password,
      phone,
      Class,
      school,
      city,
      state,
      area,
      pincode,
      fathername,
      dob,
      gender,
      profile
    } = req.body;

    con.query(
      `SELECT email FROM login WHERE email="${email}"`,
      function (err, result, fields) {
        if (err) throw err;
        if (result[0]) {
          status = 1;
        }
      }
    );

    async function main() {
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);
      const query1 = `INSERT INTO student (s_name,s_password,s_email,s_phone,class,school,s_city,s_state,s_area,s_pincode,fathername,s_dob,s_gender) VALUES ('${name}','${secPass}','${email}','${phone}','${Class}','${school}','${city}','${state}','${area}','${pincode}','${fathername}','${dob}','${gender}')`;
      const query2 = `INSERT INTO login (email,password,profile) VALUES ('${email}','${secPass}','${profile}')`;
      con.query(query1, function (err, result, fields) {
        if (err) throw err;
      });
      con.query(query2, function (err, result, fields) {
        if (err) throw err;
      });
      // sendemail(req.body.email);
      const data = {
        user: {
          id: req.body.email,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({success:true,authtoken});

    
    }

    setTimeout(() => {
      if (status) {
        status = 0;
        res
          .status(400)
          .json({ success:false});
      } else {
        main();
      }
    }, 150);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});






// ROUTE 3: Get student details. Login required
router.get("/getstudent", fetchuser, async (req, res) => {
  try {
    const email = req.user.id;
    
    con.query(
      `SELECT * FROM student WHERE s_email="${email}"`,
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



router.delete('/deletestudent/:id', fetchuser,  async (req, res) => {

  try { 
    const email=req.params.id;
    console.log(email)
    async function main() {
    const query = `DELETE FROM student WHERE s_email="${email}"`;
    con.query(query, function (err, result, fields) {
      if (err) throw err;
      
      res.json(result)
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



router.get("/getallstudent",  async (req, res) => {
  try {
   
    
    con.query(
      `SELECT * FROM student `,
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




router.put('/updatestudent/:id', fetchuser, async (req, res) => {

  try {
    const {
     
      name,
      
      phone,
      Class,
      school,
      city,
      state,
      area,
      pincode,
      fathername,
      dob,
      gender
      
    } = req.body;
    const email=req.params.id;

    async function main() {
      const query =`UPDATE student SET s_name='${name}',s_phone='${phone}',class='${Class}',school='${school}',s_city='${city}',s_state='${state}',s_area="${area}",s_pincode="${pincode}",fathername="${fathername}",s_dob="${dob}",s_gender="${gender}" WHERE s_email ="${email}"`;
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




router.get("/seestudentprofile/:id", fetchuser, async (req, res) => {
  try {
    const email = req.params.id;
    
    con.query(
      `SELECT * FROM student WHERE s_email="${email}"`,
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


router.post('/changepassword',async (req, res) => {

  try {
    const email=req.body.email;
    const password=req.body.password;
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    async function main() {
      const query =`UPDATE login SET password='${secPass}' WHERE email ="${email}"`;
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        res.json(result.affectedRows);
      });
    }

    setTimeout(() => {
      main();
    }, 150);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})



module.exports = router;
