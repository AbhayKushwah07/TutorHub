
const express = require("express");

const con = require("../db");
const router = express.Router();

const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");


const JWT_SECRET = "Abhayyisagoodb$oy";









router.post("/log", (req, res) => {
    let status = 1;
    let pass;
    let profile;
    const { email, password } = req.body;
    con.query(
      `SELECT * FROM login WHERE email="${email}"`,
      function (err, result, fields) {
  
        if (err) throw err;
        if (result[0]) {
          status = 0;
        }
        if (status == 0) {
          pass = result[0].password;
          profile=result[0].profile
        }
      }
    );
  
    try {
      async function main() {
        const data = {
          user: {
            id: email,
          },
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
  
        res.json({success: true, authtoken,profile });
      }
      setTimeout(async () => {
        if (status) {
          status = 0;
          res.status(400).json({success: false, error: "login with correct credentials" });
        } else {
          const passwordCompare = await bcrypt.compare(password, pass);
          if (!passwordCompare) {
            return res.status(400).json({
              success: false,
              error: "Please try to login with correct credentials",
            });
          }
          main();
        }
      }, 150);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
    
  });



  router.delete('/delete/:id',async (req, res) => {

    try { 
      const email=req.params.id;
      console.log(email)
      async function main() {
      const query = `DELETE FROM login WHERE email="${email}"`;
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
  

  
 
  module.exports = router