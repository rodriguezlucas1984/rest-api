const {Router} = require('express');
const router = Router();
const movies= require('../sample.json')
const _=require('lodash');
//router
router.get('/movies',(req,res) =>{
    res.json(movies);
});

router.post('/movies', (req,res) =>{
    //const movie=req.body;
   const {title, director, year, rating} = req.body;
   if(title && director && year && rating){
        const newMovie= { ...req.body};
        movies.push(newMovie);
        res.json({'added' :'ok'});
    }else{
        res.status(400).json({'statusCode' : 'BadRequest'});
    }
    
});

router.delete('/movies/:id', (req,res) =>{
    const id=req.params.id;
    _.remove(movies,(movie)=>{
        return movie.id == id
    })
    //console.log(req.params);
    res.json(movies);
});

router.put('/movies/:id', (req,res) => {
    const id=req.params.id;
    const {title, director, year , rating} = req.body;
    _.each(movies, (movie) => {
        if (movie.id == id){
            movie.title = title;
            movie.director = director;
            movie.year = year;
            movie.rating = rating;
        }
    });
    res.json({'modified' : 'ok'});  
});

 module.exports= router;
