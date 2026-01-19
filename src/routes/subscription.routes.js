import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    getUserChannelSubscribers,
    getSubscribedChannels,
    toggleSubscription
} from "../controllers/subscription.controller.js";

const router = Router();

// Secured routes
router.use(verifyJWT);

router
.route("/c/:channelId")
.get(getUserChannelSubscribers);

router
.route("/u/:subscriberId")
.get(getSubscribedChannels);

router
.route("/toggle/:channelId")
.post(toggleSubscription);

export default router;
