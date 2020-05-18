import { getSvatky } from './_svatky'

export default (req, res) => {
  res
    .status(200)
    .json(getSvatky(req.query))
}
