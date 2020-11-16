//Добавить в массив перечислимые имена свойств обьекта o и вернуть его\
//Если аргумент а не не был передан, создать новый массив


function sum(a){
  if(isArrayLike(a)){
    var total = 0;
    for(var i = 0; i < a.length; i++){
      var element = a[i];
      if (element == null) continue;
      if (isFintinr(element)) total+= element;
      else throw newError("sum(): все элэменты должны быть");
      }
      return total;
      }
      else throw Error("sum(): аргумент должен быть массивом");
}
