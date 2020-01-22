import { Router, Response, Request } from "express";
import { SongMeta } from "../models/SongMeta";

const router = Router();

router.post("/upvote",  async (req: Request, res: Response) => {
  console.log(req.query);
  if (!req.query || !req.query.id) {
    res.sendStatus(400);
    return;
  }
  
  const songId: string = req.query.id;
  await (SongMeta as any).upvote(songId);
  res.sendStatus(200);
});

export default router;