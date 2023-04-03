import mongoose from "mongoose"

const QuestionSchema = mongoose.Schema({
   questionTitle: { type: String, required: "Question must have atitle" },
   questionBody: { type: String, required: "Question must have atitle" },
   questionTags: { type: [String], required: "Question must have atitle" },
   noOfAnswer: { type: Number, default: 0 },
   upVote: { type: [String], default: [] },
   downVote: { type: [String], default: [] },
   userPosted: { type: String, required: "Question must have atitle" },
   userId: { type: String },
   askedOn: { type: Date, default: Date.now },
   answer: [{
      answerBody: String,
      userAnswered: String,
      userId: String,
      answeredOn: { type: Date, default: Date.now }

   }]
})

export default mongoose.model("Question", QuestionSchema)