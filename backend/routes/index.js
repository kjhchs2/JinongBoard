const express = require('express');
const router = express.Router();
const mysql = require('../bin/mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next){
    try{
        const sql = 'SELECT * FROM posttable';
        mysql.query(sql, function(err, posts){
            res.send(posts);
        })
    } catch (e){
        console.log(e);
    }
});


// create post 요청
router.post('/post/create', function(req, res, next) {
    try{
        const post = req.body;
        const sql = 'INSERT INTO posttable(title, contents, user, password, createdDate, modifiedDate) values ';
        const sqlValue = `("${post.title}", "${post.contents}", "${post.user}", "${post.password}", NOW(), NOW());`;
        mysql.query(sql + sqlValue, function(err, rows, fields) {
            if(!err) {
                res.json(true);
            } else {
                console.log(err);
                res.json(false);
            }
        });
    } catch (e) {
        console.log(e);
        res.json(false);
    }
    // redirect 필요
});

// connenction.query(`SELECT * FROM posttable`, (error, data)=>{
//     this.data = data;
//     console.log("query wan");
// })






module.exports = router;

