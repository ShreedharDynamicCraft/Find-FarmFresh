import { Router } from 'express'
import {
  login,
  registerConsumer,
  registerFarmer,
  nameAlreadyExists,
  emailAlreadyExists,
  getUserProfileInformation,
} from '../controllers/auth'
import authenticateMiddleware from '../middleware/authentication'
import upload from '../db/cloudinary'
const router = Router()

router.route('/login').post(login)
router.route('/userExists/email/:email').get(emailAlreadyExists)
router.route('/userExists/name/:name').get(nameAlreadyExists)
router
  .route('/register/farmer')
  .post(upload.single('image'), registerFarmer)
router
  .route('/register/consumer')
  .post(upload.single('image'), registerConsumer)
router.route('/').get(authenticateMiddleware, getUserProfileInformation)

export default router
