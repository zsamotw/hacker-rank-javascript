function pluck(objs, name) {
  return objs.map(ob => ob[name])
}

module.exports = pluck
