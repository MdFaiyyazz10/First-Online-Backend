import express from 'express'
import { deleteUser, editUser, register, showUser, singleUser } from '../controller/userController.js'
const router = express.Router()


router.route("/createuser").post(register)


router.route("/").get(showUser)


router.route("/:id").get(singleUser)


router.route("/:id").patch(editUser)


router.route("/:id").delete(deleteUser)


export default router