import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    createPlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    updatePlaylist,
    deletePlaylist,
    getUserPlaylists
} from "../controllers/playlist.controller.js";

const router = Router();

// Secured routes
router.use(verifyJWT);

router
.route("/create")
.post(createPlaylist);

router
.route("/add/:playlistId/:videoId")
.post(addVideoToPlaylist);

router
.route("/remove/:playlistId/:videoId")
.delete(removeVideoFromPlaylist);

router
.route("/user/:userId")
.get(getUserPlaylists);

router
.route("/:playlistId")
.patch(updatePlaylist)
.delete(deletePlaylist);

export default router;
