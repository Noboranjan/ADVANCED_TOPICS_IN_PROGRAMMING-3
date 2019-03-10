var express = require('express');
var router = express.Router();
var empModel = require.main.require('./models/emp-model');

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
    empModel.getAll(function (result) {
        res.render('home2/home2', {
            userList: result
        });
    });



});

router.get('/job', function (req, res) {
    res.render('job/index');
});

router.post('/job', function (req, res) {
    var user = {
        comname: req.body.cname,
        jobt: req.body.jt,
        joblo: req.body.jl,
        sala: req.body.sal

    };
    empModel.insert(user, function (status) {
        if (status) {
            res.redirect('/home2');
        } else {
            res.send('Error in adding...');
        }
    });

});

router.get('/edit2/:id', function (req, res) {

    empModel.getById(req.params.id, function (user) {
        res.render('edit2/index', user);
    });


});

router.post('/edit2/:id', function (req, res) {

    var job = {
        id: req.params.id,
        comname: req.body.cname,
        jobt: req.body.jt,
        jobloc: req.body.jl,
        sala: req.body.sal

    };
    if ((job.comname !== "") && (job.jobt !== "") && (job.jobloc !== "") && (job.sala !== "")) {
        empModel.update(job, function (status) {
            if (status) {
                res.redirect('/home2');
            } else {
                res.send("Error in updating...");
            }


        });
    } else {
        empModel.getById(req.params.id, function (user) {
            res.render('edit2/index', user);
        });
    }
});

router.get('/:id', function (req, res) {

    empModel.delete(req.params.id, function (status) {
        if (status) {
            res.redirect('/home2');
        } else {
            res.send("Error in updating...");
        }

    });
});



module.exports = router;
