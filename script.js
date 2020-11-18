

function check(args) {
  var actual = args.length;
  var expected  = args.callee.langth;
  if (actual !== expected)
    throw new Erro("ожидается" + expected + "получено" + actual);
}

function f(x, y, z){
  // провереть число ожидаемых и фактически переданых аргуменртов
  check(arguments);

}
