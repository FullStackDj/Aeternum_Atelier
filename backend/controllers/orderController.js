import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
import Stripe from "stripe"

const currency = 'pkr'
const deliveryCharges = 10

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const placeOrder = async (req, res) => {
  try {
    const {userId, items, amount, address} = req.body

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now()
    }
    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId, {carData: {}})

    res.json({success: true, message: "Order Placed"})

  } catch (error) {
    console.log(error)
    res.json({success: false, message: error.message})
  }
}

const placeOrderStripe = async (req, res) => {
  try {
    const {userId, items, amount, address} = req.body

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now()
    }
    const newOrder = new orderModel(orderData)
    await newOrder.save()

    res.json({success: false, message: "Stripe checkout pending"})

  } catch (error) {
    console.log(error)
    req.json({success: false, message: error.message})
  }
}

export {placeOrder, placeOrderStripe}
