const express = require("express");
const router = express.Router();
const path = require("path");
const mysql = require("../bin/mysql");

// index.html 연결
router.get("/board/create", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});
router.get("/board/:id", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});
router.get("/", function(req, res, next) {
    // res.render("index", { title: "Express" });
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

/* api */
// get 요청
router.get("/api/post", function(req, res, next) {
    try{
        const sql = "SELECT * FROM posttable ORDER BY createdDate DESC";
        mysql.query(sql, function(err, posts){
            res.send(posts);
            // res.sendFile(path.join(__dirname, "../public", "index.html"), posts);

        })
    } catch (e){
        console.log(e);
    }
    
});

router.get("/api/post/:id", function(req, res, next){
    try{
        const id = req.params.id;
        const sql = `SELECT * FROM posttable WHERE id = ${id}`;
        mysql.query(sql, function(err, posts){
            res.send(posts);
        })
    } catch (e){
        console.log(e);
    }
});


// 삭제, 수정시 비밀번호 검증 api
router.post("/api/post/:id/pw", function(req, res, next){
    try{
        const pw = req.body.password;
        const id = req.params.id;
        const sql1 = `SELECT password FROM posttable WHERE id="${id}"`;
        const sql2 = `SELECT HEX(AES_ENCRYPT("${pw}", "pw_key")) ;`;
        let encryption = "";
        mysql.query(sql1, function(err, posts){
            encryption = posts[0].password ;
        })
        mysql.query(sql2, function(err, posts){
            if (encryption === posts[0][`HEX(AES_ENCRYPT("${pw}", "pw_key"))`]){
                res.send(true);
            }
            else {
                res.send(false);
            }
        })
    } catch (e){
        console.log(e);
    }
});


// create post 요청
router.post("/api/post", function(req, res, next) {
    try{
        const post = req.body;
        const sql = "INSERT INTO posttable(title, contents, user, password, createdDate, modifiedDate) values ";
        const sqlValue = `("${post.title}", "${post.contents}", "${post.user}", HEX(AES_ENCRYPT("${post.password}","pw_key")), NOW(), NOW());`;
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
});

router.put("/api/post/:id", function(req, res, next) {
    try{
        const post = req.body;
        const sql = `UPDATE posttable SET title="${post.title}", user="${post.user}", contents="${post.contents}", password=HEX(AES_ENCRYPT("${post.password}","pw_key")), modifiedDate=NOW() WHERE id = ${post.id}`;
        mysql.query(sql, function(err, rows, fields) {
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
});

router.delete("/api/post/:id", function(req, res, next){
    try{
        const id = req.params.id;
        const sql = `DELETE FROM posttable WHERE id = ${id}`;
        mysql.query(sql, function(err, posts){
            res.send(posts);
        })
    } catch (e){
        console.log(e);
    }
});







module.exports = router;

