const express = require('express');
const router = express.Router();
const Book = require('../models/book');

//http 

// create a book
router.post('/',(req,res)=>{
    const book = new Book({
        title:req.body.title,
        price: req.body.price,
        author:req.body.author,
        publisher:{name:req.body.publisher.name,
            city:{cityname:req.body.publisher.city.cityname,
                zipcode:req.body.publisher.city.zipcode
            }
        }
    });
    book.save().
    
    then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({message:err});
    })
})
// get the all book
router.get('/', async(req,res) =>{ 
    try{ 
        const books = await Book.find(); 
        res.json(books); 
    }catch(err){ 
        res.json({message:err}); 
    } 
});
// // getting a post by id


router.get('/:bookid', async(req,res) =>{ 
    try{ 
        const book = await Book.findById(req.params.bookid); 
        res.json(book); 
    }catch(err){ 
        res.json({message:err}); 
    } 
});

// // deleting a post

router.delete('/:bookid', async(req,res) =>{ 
    try{ 
        const book = await Book.findByIdAndDelete({_id: req.params.bookid});
        res.json(book); 
        }catch(err){
             res.json({message:err}); 
            }
         } ); 

// // updating a post by id

 router.patch('/:bookid', async(req,res) =>{ 
     try{ 
         const book = await Book.findOne({_id: req.params.bookid}); 
         if (req.body.title){
             book.title = req.body.title;
         } 
         if(req.body.price){
            book.price = req.body.price;
         }
          
         if(req.body.author){
            book.author = req.body.author;
         }
         if(req.body.publisher){
            if(req.body.publisher.name){
                book.publisher.name = req.body.publisher.name;
             }
             if(req.body.publisher.city){
                if(req.body.publisher.city.cityname){
                    book.publisher.city.cityname = req.body.publisher.city.cityname;
                 }
                 if(req.body.publisher.city.zipcode){
                    book.publisher.city.zipcode= req.body.publisher.city.zipcode;
                 }

             }

         }
         await book.save();
         res.json(book);
        }catch(err){ 
            res.json({message:err}); 
        } });


module.exports= router;