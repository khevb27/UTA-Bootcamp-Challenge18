const { ObjectID, ObjectId, Timestamp } = require('bson');
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAt) => dateFormat(createdAt)
        }
    }
)


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 50
        },
        createdAt: {
            type: Date,
            default: Date.now("MM DD YYYY"),
 

        },
        
            username: {
                type :String,
                required: true
            },
        
        reactions: [reactionSchema],

        
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
            
        },
        id:false,
        timestamps: true
    }
);





const Thought = model('Thought', thoughtSchema);


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})


module.exports = Thought