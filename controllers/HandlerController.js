const db = require('../connection')
const http = require('http');
const url = require('url');

module.exports={
    
    async create(req,res){
        const {handler_name, user_id_fk = null}= req.body;
        await db.insert({
            handler_name,
            user_id_fk,
        }).into('handler')
        res.json({sucess:true});
    },

    async change(req,res){
        await db('handler')
        .where({handler_id: req.params.id})
        .update(req.body);
        res.json({sucess:true});
    },

    async handler(req,res){
        await db
        .select(
            'user_name',
            'handler_name'
        )
        .where({handler_id:req.params.id})
        .from('handler')
        .leftJoin('user','user_id','user_id_fk')
        .then(function(data){
            res.send(data);
        })  
    },
    
    async index(req,res){
        const {orderBy = 'handler_id'} = url.parse(req.url,true).query ;
        await db
        .select(
            'user_name',
            'handler_name',

        )
        .from('handler')
        .leftJoin('user','user_id','user_id_fk')
        .orderBy(orderBy)
        .then(function(data){
            res.send(data);
        })  
    },

    async delete(req,res){
        await db('handler')
        .where({handler_id: req.params.id})
        .del();
        res.json({sucess:true});
    }
     
}