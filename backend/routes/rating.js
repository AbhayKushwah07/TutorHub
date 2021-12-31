const express = require('express');
const con =require('../db');
var uniqid = require("uniqid");
const router = express.Router();
const fetchuser=require('../middleware/fetchuser');





router.post('/create', fetchuser,  async (req, res) => {
   try {
     const commentid=uniqid();
     const stars=req.body.stars;
     const courseid="aaaaa";
     const email=req.user.id;
    async function main() {
      const query = `INSERT INTO ratings (starsearned ,courseid,	feedback,	s_email,commentid		) VALUES ('${stars}','${courseid}','abhay','${email}','${commentid}')`;
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        res.json("done");
      });
    }

    setTimeout(() => {
      main();
    }, 50);
    
      }catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
    }
         
  })







router.post('/getavgrating', fetchuser, async (req, res) => {
    try {
      const courseid="aaaaa";
      async function main() {
        const query = `SELECT AVG(starsearned) AS avg FROM ratings WHERE courseid ="${courseid}"`;
        con.query(query, function (err, result, fields) {
          if (err) throw err;
          
          res.json(result[0].avg)
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




      router.post('/getrating', fetchuser, async (req, res) => {
        try {
          const courseid="aaaaa";
          async function main() {
            const query = `SELECT starsearned,s_email,feedback FROM ratings WHERE courseid ="${courseid}"`;
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



router.delete('/deleterating/:id', fetchuser,  async (req, res) => {

    try { 
      const commentid=req.params.id;
      async function main() {
      const query = `DELETE FROM ratings WHERE commentid="${commentid}"`;
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