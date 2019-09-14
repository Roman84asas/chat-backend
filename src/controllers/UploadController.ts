import express from "express";
import cloudinary from "../core/cloudinary";
import { UploadFileModel } from "../models";

class UploadController {

    create = (req: any, res: express.Response) => {
        const userId = req.user._id;
        const  file: any = req.file;

         const fileData =  {
            filename: file.originalname,
            size: file.bytes,
            ext: file.format,
            url: file.url,
            user: userId,
        };

         const uploadFile = new UploadFileModel(fileData);

        uploadFile
            .save()
            .then((fileObj: any) => {
                res.json({
                    status: "success",
                    file: fileObj
                });
            })
            .catch(err => {
                res.json({
                    status: "error",
                    message: err
                });
            });
    };

    delete = (req: express.Request, res: express.Response) => {

    };
}

export default UploadController;