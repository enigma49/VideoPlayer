var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const Video = require("../models/video");

const uri =
  "mongodb+srv://hamzashaikh:hamzashaikh@cluster0-hdf6i.mongodb.net/videoplayer?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;

mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(res => console.log("Connected to DB"))
  .catch(err => console.log(err));
console.log("connected");

router.get("/videos", function(req, res) {
  Video.find().exec(function(err, videos) {
    if (err) {
      console.log(err);
    } else {
      console.log("API Works");
      res.json(videos);
    }
  });
});

router.get("/videos/:id", function(req, res) {
  Video.findById(req.params.id).exec(function(err, videos) {
    if (err) {
      console.log(err);
    } else {
      console.log("API Works");
      res.json(videos);
    }
  });
});

router.post("/videos", function(req, res) {
  newVideo = new Video();
  newVideo.name = req.body.name;
  newVideo.trailer = req.body.trailer;
  newVideo.poster = req.body.poster;
  newVideo.year = req.body.year;
  newVideo.save(function(err, insertedVideo) {
    if (err) {
      console.log(err);
    } else {
      console.log("Video Inserted");
    }
  });
});

router.put("/videos/:id", function(req, res) {
  Video.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        trailer: req.body.trailer,
        poster: req.body.poster,
        year: req.body.year
      }
    },
    {
      new: true
    },
    function(err, updatedvide) {
      if (err) {
        console.log(err);
      } else {
        res.json(updatedvide);
      }
    }
  );
});

router.delete("/videos/:id", function(req, res) {
  Video.findByIdAndRemove(req.params.id, function(err, deletedVideo) {
    if (err) {
      console.log(err);
    } else {
      console.log("VIDEO DELTED");
      res.json(deletedVideo);
    }
  });
});
module.exports = router;
