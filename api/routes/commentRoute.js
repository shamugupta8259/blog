import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
	createComment,
	editComment,
	getPostComments,
	likeComment,
	deleteComment,
	getComments,
} from "../controller/commentController.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);
router.delete("/deleteComment/:commentId", verifyToken, deleteComment);
router.get("/getcomments", verifyToken, getComments);

export default router;
