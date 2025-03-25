const User = require("../model/userModel");
const { dummyData } = require("../utils/dummyData");

exports.getDashboardData = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      dummyData,
    },
  });
};

exports.getMapData = async (req, res) => {
  const { id } = req.params;
  const hotel = dummyData.find((hotel) => hotel.id === parseInt(id));

  if (!hotel) {
    return res.status(404).json({
      status: "fail",
      message: "Hotel not found",
    });
  }

  const mapData = {
    center: [hotel.latitude, hotel.longitude],
    zoom: 12,
    hotel,
  };

  res.status(200).json({
    status: "success",
    data: mapData,
  });
};
