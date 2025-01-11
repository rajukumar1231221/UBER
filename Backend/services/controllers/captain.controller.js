import { validationResult } from "express-validator";
import captainModel from "../models/captain.model.js";
import createCaptain from "../ModelSevices/captain.service.js";


export const registerCaptain = async (req, res, next) => {

    //   try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: "field error", errors: errors.array() });
    }

    const { fullName, email, password, vehicle } = req.body;
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain already exist' });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await createCaptain({

        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    const token = captain.genrateAuteToken();
    res.status(201).json({ message: "captain created successfully", token, captain })
    //   } catch (e) {
    //     res.status(500).json({error:'Failed to create captain'})
    //   }
}
