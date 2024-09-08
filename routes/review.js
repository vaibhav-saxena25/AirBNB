const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const expressError=require("../utils/ExpressError.js");

const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const {validateReview, isLoggedIn,isReviewAuthor}= require("../middleware.js");
const reviewController=require("../controllers/reviews.js");

// Post review route 
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
   

//delete  review route
//this is written by seeing the videos of shraddha khapra it is commented
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;
