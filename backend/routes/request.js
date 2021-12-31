const express = require("express");
const con = require("../db");

const router = express.Router();
const fetchuser = require("../middleware/fetchuser");

router.post("/sendrequest", fetchuser, async (req, res) => {
  try {
    const courseid = req.body.courseid;
    const t_email = req.body.t_email;
    const email = req.user.id;
    const status = "Sent";
    async function main() {
      const query = `INSERT INTO request (t_email ,s_email,courseid,status) VALUES ('${t_email}','${email}','${courseid}','${status}')`;
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        res.json("done");
      });
    }

    setTimeout(() => {
      main();
    }, 50);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


router.put("/updaterequest", fetchuser, async (req, res) => {
  try {
   
    const courseid=req.body.courseid;
    const status=req.body.status;
    
 
    
    async function main() {
      const query = `UPDATE request SET status='${status}' WHERE courseid ="${courseid}"`;
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        res.json("done");
      });
    }

    setTimeout(() => {
      main();
    }, 50);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});




router.delete('/deleterequest/:id', fetchuser,  async (req, res) => {

  try { 
    const courseid=req.params.id;
    async function main() {
    const query = `DELETE FROM request WHERE courseid="${courseid}"`;
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



router.delete('/deleterequestS/:id', fetchuser,  async (req, res) => {

  try { 
    const email=req.params.id;
    async function main() {
    const query = `DELETE FROM request WHERE s_email="${email}"`;
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




router.delete('/deleterequestT/:id', fetchuser,  async (req, res) => {

  try { 
    const email=req.params.id;
    async function main() {
    const query = `DELETE FROM request WHERE t_email="${email}"`;
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


router.post('/getstudentrequest', fetchuser, async (req, res) => {
  try {
    const email=req.user.id;
    async function main() {
      const query = `SELECT request.courseid,course.title,request.t_email,request.s_email,request.status FROM course JOIN request on course.courseid=request.courseid  WHERE request.s_email="${email}"`;
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


    router.post('/getteacherrequest', fetchuser, async (req, res) => {
      try {
        const email=req.user.id;
        async function main() {
          const query = `SELECT request.courseid,course.title,request.t_email,request.s_email,request.status FROM course JOIN request on course.courseid=request.courseid WHERE request.t_email="${email}"`;
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


        router.get('/checkcourse/:id', fetchuser, async (req, res) => {
          try {
            const id=req.params.id;
            const email=req.user.id
            async function main() {
              const query = `SELECT courseid FROM request WHERE "${id}"=request.courseid AND "${email}"=request.s_email`;
              con.query(query, function (err, result, fields) {
                if (err) throw err;
                if(result[0])
                {
                  res.json(true)
                }
                else{
                  res.json(false)
                }
                
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