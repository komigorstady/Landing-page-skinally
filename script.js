/*
Когда мы пишем new то это автоматически подразумевает создание новог контекста
тоесть объект. ГДе ты в компиляторе подразумивается


function Person (name, family, age) {

  создать чичтый объект новый объект +
  this.name = name
  this.name = family
  this.age = age

  Автоматом этот контекст(Или новосозданый обЪект будет присваиватся) в
  return

}

*/

function Range(from, to){
  this.from = from;
  this.to = to;
}

Range.prototype = {
    includes: function(x) { return this.form <= x && x <= this.to},

    foreach: function(f) {
      for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
        },
        // Воз­вра­ща­ет стро­ко­вое пред­став­ле­ние диа­па­зо­на
        toString: function() { return "(" + this.from + "..." + this.to + ")"; }
};

let r = new Range(1,3);
r.includes(2);
r.foreach(console.log);
console.log







