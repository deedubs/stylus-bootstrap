exports = module.exports = function stylusBootstrap() {
  return function(stylus){
    stylus.include(__dirname);
  }
}