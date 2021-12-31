const express = require("express");
const con = require("../db");
const router = express.Router();
// const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
// const email=require('../email');

const JWT_SECRET = "Abhayyisagoodb$oy";

router.post("/signup", async (req, res) => {
  var status = 0;
  try {
    const {
      name,
      email,
      password,
      phone,
      city,
      state,
      area,
      pincode,
      exp,
      description,
      dob,
      qualification,
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
      const query1 = `INSERT INTO teacher (
        t_name	,t_email	,t_password	,t_phone,	t_city,	t_state,	t_area,	t_pincode,	exp,	description,	t_dob,	qualification,	t_gender	
        ) VALUES ('${name}','${email}','${secPass}','${phone}','${city}','${state}','${area}','${pincode}','${exp}','${description}','${dob}','${qualification}','${gender}')`;
        const query2 = `INSERT INTO login (email,password,profile) VALUES ('${email}','${secPass}','${profile}')`;
      con.query(query1, function (err, result, fields) {
        if (err) throw err;
      });
      con.query(query2, function (err, result, fields) {
        if (err) throw err;
      });

      // email(req.body.email);
      const data = {
        user: {
          id: req.body.email,
          
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({authtoken,success:true});

      
    }

    setTimeout(() => {
      if (status) {
        status = 0;
        res
          .status(400)
          .json({ success:false });
      } else {
        main();
      }
    }, 100);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// // ROUTE 2: Student login. No login required
// router.post("/login", (req, res) => {
//   let status = 1;
//   let pass;
//   const { email, password } = req.body;
//   con.query(
//     `SELECT t_email,t_password FROM teacher WHERE t_email="${email}"`,
//     function (err, result, fields) {
//       if (err) throw err;
//       if (result[0]) {
//         status = 0;
//       }
//       if (status == 0) {
//         pass = result[0].t_password;
//       }
//     }
//   );

//   try {
//     async function main() {
//       const data = {
//         user: {
//           id: email,
//         },
//       };
//       const authtoken = jwt.sign(data, JWT_SECRET);

//       res.json({ authtoken });
//     }
//     setTimeout(async () => {
//       if (status) {
//         status = 0;
//         res.status(400).json({ error: "login with correct credentials" });
//       } else {
//         const passwordCompare = await bcrypt.compare(password, pass);
//         if (!passwordCompare) {
//           return res.status(400).json({
//             error: "Please try to login with correct credentials",
//           });
//         }
//         main();
//       }
//     }, 100);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// ROUTE 3: Get student details. Login required
router.get("/getteacher", fetchuser, async (req, res) => {
  try {
    const email = req.user.id;

    con.query(
      `SELECT * FROM teacher WHERE t_email="${email}"`,
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


router.delete('/deleteteacher/:id', fetchuser,  async (req, res) => {

  try { 
    const email=req.params.id;
    console.log(email)
    async function main() {
    const query = `DELETE FROM teacher WHERE t_email="${email}"`;
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



router.get("/getallteacher",  async (req, res) => {
  try {


    con.query(
      `SELECT * FROM teacher `,
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





router.put('/updateteacher/:id', fetchuser, async (req, res) => {

  try {
    const {
      name,
      
      
      phone,
      city,
      state,
      area,
      pincode,
      exp,
      description,
      dob,
      qualification,
      gender,
    
      
    } = req.body;
    const email=req.params.id;

    async function main() {
      const query =`UPDATE teacher SET t_name='${name}',t_phone='${phone}',exp='${exp}',description='${description}',t_city='${city}',t_state='${state}',t_area="${area}",t_pincode="${pincode}",qualification="${qualification}",t_dob="${dob}",t_gender="${gender}" WHERE t_email ="${email}";`;
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



router.get("/seeteacherprofile/:id", fetchuser, async (req, res) => {
  try {
    const email = req.params.id;

    con.query(
      `SELECT * FROM teacher WHERE t_email="${email}"`,
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
