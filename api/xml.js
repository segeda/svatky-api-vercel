import { getSvatky } from './_svatky'

export default (req, res) => {
  const svatky = getSvatky(req.query);

  res.write('<?xml version="1.0" encoding="UTF-8"?>');
  res.write('<svatky>');
  for (var svatek in svatky) {
    res.write(`<svatek><date>${svatky[svatek].date}</date><name>${svatky[svatek].name}</name></svatek>`);
  }
  res.write('</svatky>');

  res
    .status(200)
    .end()
}
