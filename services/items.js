import express from 'express';

let app = express();

app.get('/items', (req,res,next) => {
    res.status(200).send(['pokeball', 'lightsaber', 'shield'])
})

app.listen(8000, () => {
    console.log('Server running on 8000')
})