import * as cs from './_cs';
import * as sk from './_sk';

export function getSvatky(query) {
  let lang = cs;
  if (query.lang === 'sk') {
    lang = sk;
  }

  if (query.name) {
    return lang.who(query.name)
  }

  if (query.date) {
    return lang.when(query.date)
  }

  var now = new Date();

  return lang.when((now.getDate() < 10 ? '0' : '') + now.getDate() + ((now.getMonth() + 1) < 10 ? '0' : '') + (now.getMonth() + 1));
}
