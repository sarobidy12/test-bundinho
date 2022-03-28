import { Request, Response } from "express";
import { User } from "../entity/User";
import { IUser } from "../interface/User";

class USerController {

  // CREATE NEW USER AND YOUR NOTE 

  static createUser = async (req: Request, res: Response) => {

    const {
      firstName,
      lastName,
      email,
      note
    } = req.body as IUser;


    try {

      await User.create({
        firstName,
        lastName,
        email,
        note
      })

      res.status(200).send({
        "success": "user is added"
      });

    } catch (err: any) {
      res.status(500).send({
        "error": "Error",
        "Problem": err
      })
    }

  }

  // GET LIST USER

  static getUser = async (req: Request, res: Response) => {

    try {

      const listUser = await User.find()
        .sort({ dateCreated: -1 });

      res.status(200).send({
        "listUser": listUser
      });

    } catch (err: any) {
      res.status(500).send({
        "error": "Error",
        "Problem": err
      })
    }

  }

  // GET LIST USER FILTER

  static findUserByMail = async (req: Request, res: Response) => {

    // get all user

    const { email } = req.body;

    try {

      const listUserFilter = await User.find({
        "email": {
          $regex: email, $options: "i"
        }
      })
        .sort({ dateCreated: -1 });

      res.status(200).send({
        "listUserFilter": listUserFilter
      });

    } catch (err: any) {
      res.status(500).send({
        "error": "Error",
        "Problem": err
      })
    }

  }

  // GET MOYENNE NOTE

  static getMoyenneNote = async (req: Request, res: Response) => {

    try {

      const listNote = await User.find();

      // calcul total 

      let note = 0;

      if (listNote.length > 0) {

        note = listNote.map((user: IUser) => +user.note).reduce((a: any, b: any) => a + b);

      }

      // Savoir 

      const sorted: any[] = listNote.sort(
        (a: any, b: any) => a.nbr - b.nbr
      );

      const lePremier = sorted[0];
      const Dernier = sorted[sorted.length - 1];

      // calcul moyenne

      const moyen = note / listNote.length;

      res.status(200).send({
        "Moyen": moyen,
        "First": lePremier,
        "Dernier": Dernier
      });

    } catch (err: any) {
      res.status(500).send({
        "error": "Error",
        "Problem": err
      })
    }

  }

}


export default USerController;
