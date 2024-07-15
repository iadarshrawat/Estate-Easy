import express from 'express';
const router = express.Router();

router.get('/user', ()=>{
    console.log('hllo');
});

export default router;