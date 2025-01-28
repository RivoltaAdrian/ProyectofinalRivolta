import { Router } from "express";
import { UserModel } from "../models/user.model.js";

const route = Router();

route.get('/', async (req, res) => {
    const result = await UserModel.find()
    if(!result) return res.json({ mensaje: 'No se encontro nada', payload: result })
    })

export default route