/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const MONGO_URI = "mongodb+srv://eswarsai8074:GxlEfEfJ2Fw9g7nj@cluster0.fpvov.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define schema and specify collection name `climate`
const DhtSchema = new mongoose.Schema({
    temperature: Number,
    humidity: Number,
    timestamp: String,
}, { collection: 'climate' }); // Collection for climate data

const Dht = mongoose.model('Dht', DhtSchema);

// Define schema for digisoil collection
const DigiSoilSchema = new mongoose.Schema({
    soilMoisture: Number,
    timestamp: String,
}, { collection: 'digisoil' }); // Collection for digisoil data

const DigiSoil = mongoose.model('DigiSoil', DigiSoilSchema);

// Root route to check if server is running
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Route to fetch climate data from MongoDB (without limit)
app.get('/climate', async (req, res) => {
    try {
        const data = await Dht.find().sort({ timestamp: -1 }); // Fetch all entries without limit
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to fetch digisoil data from MongoDB (without limit)
app.get('/digisoil', async (req, res) => {
    try {
        const data = await DigiSoil.find().sort({ timestamp: -1 }); // Fetch all entries without limit
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/


/*

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' })); // Allow all origins
app.use(express.json());

// MongoDB connection URI
const MONGO_URI = "mongodb+srv://eswarsai8074:GxlEfEfJ2Fw9g7nj@cluster0.fpvov.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define schemas and models
const DhtSchema = new mongoose.Schema({
    temperature: Number,
    humidity: Number,
    timestamp: String,
}, { collection: 'climate' });

const Dht = mongoose.model('Dht', DhtSchema);

const DigiSoilSchema = new mongoose.Schema({
    soilMoisture: Number,
    timestamp: String,
}, { collection: 'digisoil' });

const DigiSoil = mongoose.model('DigiSoil', DigiSoilSchema);

// Placeholder for motion collection
const MotionSchema = new mongoose.Schema({
    motionDetected: Boolean,
    timestamp: String,
}, { collection: 'motion' });

const Motion = mongoose.model('Motion', MotionSchema);

// Root route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Routes
app.get('/climate', async (req, res) => {
    try {
        const data = await Dht.find().sort({ timestamp: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/digisoil', async (req, res) => {
    try {
        const data = await DigiSoil.find().sort({ timestamp: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/motion', async (req, res) => {
    try {
        const data = await Motion.find().sort({ timestamp: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const MONGO_URI = "mongodb+srv://eswarsai8074:GxlEfEfJ2Fw9g7nj@cluster0.fpvov.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define schema for climate collection
const DhtSchema = new mongoose.Schema({
    temperature: Number,
    humidity: Number,
    timestamp: String,
}, { collection: 'climate' });

const Dht = mongoose.model('Dht', DhtSchema);

// Define schema for digisoil collection
const DigiSoilSchema = new mongoose.Schema({
    soilMoisture: Number,
    timestamp: String,
}, { collection: 'digisoil' });

const DigiSoil = mongoose.model('DigiSoil', DigiSoilSchema);

// Define schema for motion data collection
const MotionSchema = new mongoose.Schema({
    detected: Boolean,
    timestamp: String,
}, { collection: 'motion' });

const Motion = mongoose.model('Motion', MotionSchema);

// Root route to check if server is running
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Route to fetch climate data from MongoDB (with pagination, 10 results)
app.get('/climate', async (req, res) => {
    try {
        const data = await Dht.find().sort({ timestamp: -1 }).limit(10); // Limit to 10 entries
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to fetch digisoil data from MongoDB (with pagination, 10 results)
app.get('/digisoil', async (req, res) => {
    try {
        const data = await DigiSoil.find().sort({ timestamp: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to fetch motion data from MongoDB (with pagination, 10 results)
app.get('/motion', async (req, res) => {
    try {
        const data = await Motion.find().sort({ timestamp: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
