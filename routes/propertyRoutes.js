const express = require('express');
const Property = require('../models/propertyModel');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

//Add new Property (Protected Route)
router.post('/', protect, async (req, res) => {
    try{
        const { title, description, price, location, owner } = req.body;

        const newProperty = new Property({
            title,
            description,
            price,
            location,
            owner: req.user._id
        });

        const savedProperty = await newProperty.save();
        res.status(201).json(newProperty);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


// GET ALL PROPERTIES
router.get('/', async (req, res) => {
    try{
        //Destructure page and limit from query params
        const { page = 1, limit = 10, minPrice, maxPrice, propertyType, location } = req.query;
        
        //Convert page and limit to numbers
        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);

        //Set default values if they are invalid
        if (isNaN(pageNumber) || pageNumber <= 0) {
            return res.status(400).json({ message: 'Invalid page number' });
        }
        if (isNaN(limitNumber) || limitNumber <= 0) {
            return res.status(400).json({ message: 'Invalid limit number' });
        }
        const filter = {};

        // Search by location
        if (req.query.title) {
            query.title = { $regex: req.query.location, $options: 'i'};
        }

        //Search by title
        if (req.query.title) {
            query.title = { $regex: req.query.title, $options: 'i'};
        }

        //Filter by price range
        if(minPrice && maxPrice) {
            filter.price = { $gte: minPrice, $lte: maxPrice };
        }

        //Filter by property type
        if (propertyType) {
            filter.propertyType = propertyType;
        }

        //Filter by location
        if (location) {
            filter.location = location;
        }

        const properties = await Property.find(filter).populate('owner', 'username email');

        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

//GET SINGLE PROPERTY
router.get('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('owner', 'username email');
        if (!property) return res.status(404).json({ message: 'Property not found' });

        res.json(property);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// ➤ UPDATE PROPERTY (Only Owner Can Update)
router.put('/:id', protect, async (req, res) => {
    try {
        const { title, description, price, location } = req.body;

        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        // Check if user is the owner
        if (property.owner.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized to update this property' });
        }

        property.title = title || property.title;
        property.description = description || property.description;
        property.price = price || property.price;
        property.location = location || property.location;

        await Property.save();
        
        res.json(property);
    } catch (error) {
        console.error("Error during update:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// ➤ DELETE PROPERTY (Only Owner Can Delete)
router.delete('/:id', protect, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        // Check if user is the owner
        if (property.owner.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized to delete this property' });
        }

        await property.deleteOne();

        res.json({ message: 'Property deleted successfully' });

    } catch (error) {
        console.error("Delete Property Error:", error);
        res.status(500).json({ message: 'Server error' });
    }
});

//Sample Property Route
router.get('/', protect, (req, res) => {
    res.json({ message: 'Protected Property API is working', user: req.user });
});

// Dummy property list
router.get('/list', (req, res) => {
    const propeties = [
        { id: 1, name: 'Luxury Villa', location: 'Tanzania', price: 500000},
        { id: 2, name: 'City Apartment', location: 'Geita', price: 200000},
        { id: 3, name: 'Beach House', location: 'Geita', price: 800000},
    ];

//POST route to add a new property
router.post('/add', (req, res) => {
    console.log("POST /add request received");

    const { name, location, price } = req.body;
    const newproperty = { id: Date.now(), name, location, price};

    //Basic validation
    if (!name || !location || !price) {
        return res.status(400).json({message: 'All fields are required'});
    }

    const newProperty = {
        id: Date.now(),
        name,
        location,
        price
    };
    // Make sure you are returning JSON
    properties.push(newProperty);
    res.status(201).json({
        message: 'Property added successfull',
        property: newProperty
     });
}); 

    res.json(propeties);
});

module.exports = router;