import { Router } from "express";
import USerController from "../controllers/UserControlleur";

const router = Router();

router.post(
    "/",
    USerController.createUser
)

router.get(
    "/",
    USerController.getUser
)

router.post(
    "/filter",
    USerController.findUserByMail
)

router.get(
    "/moyenne",
    USerController.getMoyenneNote
)

export default router;