const restful = require('node-restful') //cria uma api
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now}
})

// exportando schema
module.exports = restful.model('Todo', todoSchema)