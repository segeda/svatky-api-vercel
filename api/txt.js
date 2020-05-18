import { getSvatky } from './_svatky'

export default (req, res) => {
  const svatky = getSvatky(req.query)

  for (var svatek in svatky) {
    res.write(`${svatky[svatek].date};${svatky[svatek].name}\n`)
  }

  res
    .status(200)
    .end()
}
