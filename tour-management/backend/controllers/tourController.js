import Tour from '../models/Tour.js'

export const createTour = async (req,res) => {
    const newTour = new Tour(req.body)

    try{
        const savedTour = await newTour.save();

        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedTour,

        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to Create"
        });
    }
}


export const updateTour = async(req,res) =>{
    const id = req.params.id
    try{
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true});

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updateTour,

        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to Updtae"
        });
    }

}


export const deleteTour = async(req,res) =>{
    const id = req.params.id
    try{
        const deleteTour = await Tour.findByIdAndDelete(id, {
            
        }, {new:true});

        res.status(200).json({
            success: true,
            message: "Successfully deleted"

        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to delete"
        });
    }
    
}
export const getAllTours = async(req,res) =>{
    const page = parseInt(req.query.page);

    try{
        const getTours = await Tour.find({}).populate("reviews").skip(page * 8).limit(8);

        res.status(200).json({
            success: true,
            count: getTours.length,
            message: "Successfully retrieved",
            data: getTours,

        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "not found"
        });
    }
    
}

export const getSingleTour = async(req,res) =>{
    const id = req.params.id
    try{
        const getTour = await Tour.findById(id, {
            
        }, {new:true}).populate("reviews");

        res.status(200).json({
            success: true,
            message: "Successfully selected",
            data: getTour,

        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "not found"
        });
    }
}

export const getTourBySearch = async(req,res) => {

    const city = new RegExp(req.query.city,'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try{
        const tours = await Tour.find ({
            city, 
            distance:{$gte: distance},
            maxGroupSize: {$gte:maxGroupSize}
        })

        res.status(200).json({
            success: true,
            message: "Successful",
            data: getTour
    });

}catch(err){
    res.status(404).json({
        success: false,
        message: "not found"
    });
}

}

export const getFeaturedTour = async(req,res) => {

    const city = new RegExp(req.query.city,'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try{
        const featuredTours = await Tour.find ({
            featured: true
        }).limit(8);

        res.status(200).json({
            success: true,
            message: "Successful",
            data: featuredTours
    });

}catch(err){
    res.status(404).json({
        success: false,
        message: "not found"
    });
}

}

export const getTourCount = async(req,res)=>{
try{
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
        success: true,
        message: "Successful",
        data: tourCount
});
}
    
catch(err){
    res.status(500).json({
        success: false,
        message: "failed to fetch"
    });
}


}






