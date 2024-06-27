import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js"

export const sendMessage = async (req,res) => {

    try {
        
        const {message} = req.body;
        const {id : recieverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all : [senderId, recieverId]},
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            })
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //Scoket IO FUNCTIONALITY WILL GO HERE

        //This will not run in paraller
        // await conversation.save(); 
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({newMessage});


    } catch (error) {

        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all : [senderId, userToChatId]},
        }).populate("messages"); // not reference but actual message

        if(!conversation) return res.status(200).json([]);

         // Extract only the 'message' field from each message object
        //  const messages = conversation.messages.map(msg => msg.message);
        const messages = conversation.messages;
        res.status(200).json(messages);
    } catch (error) {

        console.log("Error in getMessage controller" , error.message);
        res.status(500).json({error: "Internal server error"});
    }
}