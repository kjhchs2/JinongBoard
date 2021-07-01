var express = require("express");
var router = express.Router();
var mysql = require("../bin/mysql");

router.get("/", function (req, res, next) {
    res.render("post/list");
});

router.get("/create", function (req, res, next) {
    res.render("post/create");
});

router.post('/create', function(req, res, next) {
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
        res.render("/post/list")
    } catch (e) {
        console.log(e);
        res.json(false);
    }
});

module.exports = router;