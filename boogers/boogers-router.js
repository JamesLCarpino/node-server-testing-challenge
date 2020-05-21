const router = require('express').Router()

const Boogers = require('./boogers-model')


router.get('/', (req, res)=>{
    Boogers.get(req.params.id)
    .then(boogers =>{
        res.status(200).json(boogers);
    }).catch(err => {
        res.status(500).json({message: 'could not pick boogers out of the nose....er...database'})
    })
})

router.get('/:id', (req, res)=>{
    Boogers.getById(req.params.id)
    .then(boogers => {
        if(boogers){
            res.status(200).json(boogers);
        }else{
            res.status(404).json({
                message: 'No specific booger found in this nose'
            })
        }
    }).catch(err =>{
        res.status(500).json({message: err.message})
    })
})

router.post('/', (req, res)=>{
    Boogers.add(req.body)
    .then(booger =>{
        res.status(201).json({booger})
    }).catch(err =>{
        console.log(err, "posted")
        res.status(500).json({message: 'You shame the nose, no boogers created'})
    })
})

router.delete('/:id', (req, res)=>{
    Boogers.pick(req.params.id)
    .then(pickNose =>{
        if(pickNose > 0){
            res.status(200).json({pickNose})
        }else{
            res.status(500).json({
                message: 'You could not get your finger deep enough into the nose to pick out that booger!'
            })
        }
    })
})

module.exports = router;
