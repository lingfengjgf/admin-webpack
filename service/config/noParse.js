module.exports = base => {
  base.module.noParse = /^vue$/;
  return base;
}