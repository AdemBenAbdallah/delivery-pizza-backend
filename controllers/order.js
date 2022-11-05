import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const savedOrder = await Order.create(req.body);
    res.status(200).json(savedOrder);
  } catch (err) {
    console.log(err);
  }
};
export const postOrder = async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
};
export const findOrderId = async (req, res) => {
  try {
    const order = await Order.find({ _id: req.params.id });
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
};
export const updateStatus = async (req, res) => {
  try {
    const order = await Order.updateOne(
      { _id: req.params.id },
      { $inc: { status: 1 } }
    );
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
};
// export const updateHotel = async (req, res, next) => {
//   try {
//     const updatedHotel = await Hotel.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedHotel);
//   } catch (err) {
//     next(err);
//   }
// };
// export const deleteHotel = async (req, res, next) => {
//   try {
//     await Hotel.findByIdAndDelete(req.params.id);
//     res.status(200).json("Hotel has been deleted.");
//   } catch (err) {
//     next(err);
//   }
// };
// export const getHotel = async (req, res, next) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);
//     res.status(200).json(hotel);
//   } catch (err) {
//     next(err);
//   }
// };

// export const getHotels = async (req, res, next) => {
//   const { min, max, ...others } = req.query;
//   try {
//     const hotels = await Hotel.find({
//       ...others,
//       cheapestPrice: { $gte: min | 1, $lte: max || 999 },
//     }).limit(req.query.limit);
//     res.status(200).json(hotels);
//   } catch (error) {
//     next(error);
//   }
// };

// export const countByCity = async (req, res, next) => {
//   const cities = req.query.cities.split(",");
//   try {
//     const list = await Promise.all(
//       cities.map((city) => {
//         return Hotel.countDocuments({ city: city });
//       })
//     );
//     res.status(200).json(list);
//   } catch (error) {
//     next(error);
//   }
// };
// export const countByType = async (req, res, next) => {
//   const types = req.query.types.split(",");
//   try {
//     const list = await Promise.all(
//       types.map((type) => {
//         return Hotel.countDocuments({ type: type });
//       })
//     );
//     res.status(200).json(list);
//   } catch (error) {
//     next(error);
//   }
// };

// export const getHotelRooms = async (req, res, next) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);
//     const list = await Promise.all(
//       hotel.rooms.map((room) => {
//         return Room.findById(room);
//       })
//     );
//     res.status(200).json(list);
//   } catch (err) {
//     next(err);
//   }
// };
