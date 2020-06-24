const express = require('express');
const router = express.Router();
const Post = require('../../models/Posts');
// const Category = require('../../models/Category');
const validateCreatePost = require("../../validation/post");
const keys = require("../../config/keys");

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});

router.post('/createpost', (req, res) => {
    // Form validation
    const { errors, isValid } = validateCreatePost(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    } else {

        const newPost = new Post({
            title: req.body.title,
            amount: req.body.amount,
            location: req.body.location,
            status: req.body.status,
            category: req.body.category,
            stack: req.body.stack,
            experience: req.body.experience,
            content: req.body.content
        });

        newPost
            .save()
            .then(savedPost => res.json(savedPost))
            .catch(err => console.log(err));

        // newPost.save().then(savedPost => {
        //     req.flash('success_message', `Post ${savedPost.title} was created successfully`);
        //     res.redirect('/admin/posts');
        // })
        
    }
})

router.post('/create', (req, res) => {

    let errors = [];
    if (!req.body.title) {
        errors.push({ message: 'please add a title' });
    }
    if (errors.length > 0) {
        res.render('admin/posts/create', {
            errors: errors
        });
    } else {

        let filename = 'BMW';
        if (!isEmpty(req.files)) {
            let file = req.files.file;
            filename = Date.now() + '-' + file.name;
            file.mv('./public/uploads/' + filename, (err) => {
                if (err) throw err;
            });
        }

        const newPost = new Post({
            title: req.body.title,
            file: filename,
            amount: req.body.amount,
            location: req.body.location,
            status: req.body.status,
            category: req.body.category,
            stack: req.body.stack,
            experience: req.body.experience,
            body: req.body.body
        });

        newPost.save().then(savedPost => {
            req.flash('success_message', `Post ${savedPost.title} was created successfully`);
            res.redirect('/admin/posts');
        }).catch(error => {
            console.log('could not save post');
        });
    }
});


router.put('/edit/:id', (req, res) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {

            let allowComments = true;
            if (req.body.allowComments) {
                allowComments = true;
            } else {
                allowComments = false;
            }

            post.title = req.body.title;
            post.amount = req.body.amount;
            post.location = req.body.location;
            post.status = req.body.status;
            post.allowComments = allowComments;
            post.category = req.body.category;
            post.stack = req.body.stack;
            post.experience = req.body.experience;
            post.body = req.body.body;
            post.save().then(updatedPost => {
                res.redirect('/admin/posts');
            });
        });
});

router.delete('/:id', (req, res) => {
    Post.deleteOne({ _id: req.params.id })
        .then(result => {
            res.redirect('/admin/posts');
        });
});

module.exports = router;

