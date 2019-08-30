import express from "express";
import { MessageModel } from "../models";

class MessageController {

    //create message
    create = (req: express.Request, res: express.Response) => {
        const userId = "5d6946d54ab1ab0cc8ebb261";

        const postData = {
            text: req.body.text,
            dialog: req.body.dialog_id,
            user: userId
        };

        const message = new MessageModel(postData);

        message
            .save()
            .then((obj: any) => {
                res.json(obj);
            })
            .catch(reason => {
                res.json(reason);
            });
    };

    //show message
    index = (req: express.Request, res: express.Response)=> {
        const dialogId: string = req.query.dialog;

        MessageModel.find({ dialog: dialogId })
            .populate(["dialog"])
            .exec(function(err, messages) {
                if (err) {
                    return res.status(404).json({
                        message: "Messages not found"
                    });
                }
                return res.json(messages);
            });
    };

    //delete message
    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.params.id;
        MessageModel.findOneAndRemove({ _id: id })
            .then(message => {
                if (message) {
                    res.json({
                        message: `Message deleted`
                    });
                }
            })
            .catch(() => {
                res.json({
                    message: `Message not found`
                });
            });
    }
}

export default MessageController;
