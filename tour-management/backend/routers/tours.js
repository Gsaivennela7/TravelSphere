import express from 'express'
import {createTour, updateTour , deleteTour ,
getFeaturedTour,
getSingleTour, getAllTours, getTourBySearch,getTourCount} from './../controllers/tourController.js'
import {verifyAdmin} from "../utils/verifytoken.js"
const router = express.Router()

router.post('/',verifyAdmin,createTour);
router.put('/:id', verifyAdmin,updateTour);
router.delete('/:id', verifyAdmin,deleteTour);
router.get('/:id', getSingleTour);
router.get('/', getAllTours);
router.get('search/getTourBySearch', getTourBySearch);
router.get('search/getFeaturedTours', getFeaturedTour);
router.get('search/getTourCount', getTourCount);

export default router;