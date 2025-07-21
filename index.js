const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SessionUser = require('./models/SessionUser');
const SessionPage = require('./models/SessionPage');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json())


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));


// Routers
const queueRouter = require("./routes/queueRouter");

app.use("/queue", queueRouter);


// create a member for queue
app.post('/login', async (req, res ) => {
  const { username, password, createdUrl } = req.body;
  try {
    const pageExists = await SessionPage.exists({routeId: createdUrl});
    if (!pageExists) {
      console.error(error);
      res.status(500).json({message: "Error checking page"})
    }
  } catch (error) {
    console.error("Error checking if page exists: ", error)
  }

  const hashed = await bycrypt.hash(password, 10);
  
  await SessionUser.create({
    username,
    password: hashed,
    role: "member",
    pageId: createdUrl,
  });
  
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));