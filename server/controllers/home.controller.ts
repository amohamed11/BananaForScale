import { request, Request, Response } from "express"

export const index = (req: Request, res: Response) => {
  res.json({
    title: "API for BananaScale"
  })
}

export const analyze = (req: Request, res: Response) => {
  res.json({
    body: req.body
  })
}
