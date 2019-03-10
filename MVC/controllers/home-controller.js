var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('*', function (req, res, next) {
    if (req.session.un == null) {
        res.redirect('/login');
    } else {
        next();
    }
});


router.get('/', function (req, res) {
    //res.send("<h2>hello<h2>");
    /*var data={
       
    };*/
    userModel.getAll(function (result) {
        res.render('home/home', {
            userList: result
        });
    });



});

router.get('/create', function (req, res) {
    res.render('create/index');
});

router.post('/create', function (req, res) {
    var user = {
        user: req.body.username,
        password: req.body.password,
        emname: req.body.ename,
        comname: req.body.cname,
        conno: req.body.cno

    };
    userModel.insert(user, function (status) {
        if (status) {
            res.redirect('/home');
        } else {
            res.send('Error in adding...');
        }
    });

});


router.get('/edit/:id', function (req, res) {

    userModel.getById(req.params.id, function (user) {
        res.render('edit/index', user);
    });


});

router.post('/edit/:id', function (req, res) {

    var user = {
        id: req.params.id,
        username: req.body.username,
        password: req.body.password,
        emname: req.body.ename,
        comname: req.body.cname,
        conno: req.body.cno

    };
    if ((user.username !== "") && (user.password !== "") && (user.emname !== "") && (user.comname !== "") && (user.conno !== "")) {
        userModel.update(user, function (status) {
            if (status) {
                res.redirect('/home');
            } else {
                res.send("Error in updating...");
            }
        });
    } else {
        var id = req.params.id;
        userModel.getById(id, function (user) {
            // res.send("empty");
            res.render('edit/index', user);
        });
    }
});

router.get('/:username', function (req, res) {

    userModel.delete(req.params.username, function (status) {
        if (status) {
            res.redirect('/home');
        } else {
            res.send("Error in updating...");
        }

    });
});

router.post('/getData', function (req, res) {

    console.log(req.body.name);

    userModel.searchByName(req.body.name, function (result) {
        if (result.length > 0) {
            console.log(result);
            res.send(result[0]);
        } else {
            res.send("Not found...");
        }
    });


});


module.exports = router;
