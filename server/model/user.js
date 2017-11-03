/**
 * Created with Wang TengFei
 * User: wangtengfei@nowledgedata.com.cn
 * Date: 2017/11/3
 * Time: 下午3:21
 * description:
 */
const mongoose = require('mongoose')
var kittySchema = mongoose.Schema({
  name: String
})

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name"
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema)

module.exports = Kitten