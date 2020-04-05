const db = require('../connection')
const http = require('http');
const url = require('url');

module.exports={
    async create(req,res){
        const {user_name}= req.body;
        await db.insert({
            user_name
        }).into('user');
        res.send()
    },

    async index(req,res){
        const {orderBy = 'user_id'} = url.parse(req.url,true).query ;
        console.log(userId)
        await db.select()
        .from('user')
        .orderBy(orderBy)
        .then(function(data){
            res.send(data);
        });
    },

    async user(req,res){
        await db('user')
        .where({user_id: req.params.id})
        .select()
        .then(function(data){
            res.send(data);
        });
        
    },

    async change(req,res){
        await db('user')
        .where({user_id: req.params.id})
        .update(req.body);
        res.json({sucess:true});

    },

    async delete(req,res){
        await db('user')
        .where({user_id: req.params.id})
        .del();
        res.json({sucess:true});
    }
}