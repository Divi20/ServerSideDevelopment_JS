const express = require('express')
const bodyParser  = require('body-parser')

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the promos to you');
})
.post((req,res,next)=>{
    res.end('Will add the promo:' + req.body.name + 'with details:' + 
    req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation nort supported on /promo');
})

.delete((req,res,next)=>{
    res.end('Deleting all promos');
})

//promoid
promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.promoId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promo/'+ req.params.dishId);
})

.put((req, res, next) => {
  res.write('Updating the promo: ' + req.params.dishId + '\n');
  res.end('Will update the promo: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting promo: ' + req.params.promoId);
});

module.exports = promoRouter;