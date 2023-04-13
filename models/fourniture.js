
const mongoose=require('mongoose');

const fournitureSchema=mongoose.Schema({
  name: {type:String,
    required:true},
  image:{type:String,default:''},
  location: {
    type: {type: String, default: 'Point'},
    coordinates: {type: [Number], required: true},
  },
  availability:String,
  description:{type:String,required:true},
  isFeatured:Boolean,
  category:{type:mongoose.Schema.Types.ObjectId,ref:'Category',required:true}
})
fournitureSchema.index({location: '2dsphere'});

exports.Fourniture=mongoose.model('Fourniture',fournitureSchema);