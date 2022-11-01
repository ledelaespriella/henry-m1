const ejercicio1 = () => {
  x = 1;
  var a = 5;
  var b = 10;
  var c = function (a, b, c) {
    var x = 10;
    console.log(x);
    console.log(a);
    var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
    };
    f(a, b, c);
    console.log(b);
  };
  c(8, 9, 10);
  console.log(b);
  console.log(x);
};

const ejercicio2 = () => {
  console.log(bar);
  console.log(baz);
  foo();
  function foo() {
    console.log("Hola!");
  }
  var bar = 1;
  baz = 2;
};

const ejercicio3 = () => {
  var instructor = "Tony";
  if (true) {
    var instructor = "Franco";
  }
  console.log(instructor);
};

const ejercicio4 = () => {
  var instructor = "Tony";
  console.log(instructor);
  (function () {
    if (true) {
      var instructor = "Franco";
      console.log(instructor);
    }
  })();
  console.log(instructor);
};

const ejercicio5 = () => {
  var instructor = "Tony";
  let pm = "Franco";
  if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
  }
  console.log(instructor);
  console.log(pm);
};

const ejercicio6 = () => {
  console.log(6 / "3");
  console.log("2" * "3");
  console.log(4 + 5 + "px");
  console.log("$" + 4 + 5);
  console.log("4" - 2);
  console.log("4px" - 2);
  console.log(7 / 0);
  console.log({}[0]);
  console.log(parseInt("09"));
  console.log(5 && 2); //si devuelve true imprime el 2
  console.log(2 && 5);
  console.log(5 || 0); //devuelve aquel que sea true, y la izquierda
  console.log(0 || 5);
  console.log([3] + [3] - [10]);
  console.log(3 > 2 > 1);
  console.log([] == ![]);
};

const ejercicio7 = () => {
  function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
      return 2;
    }
  }
  test();
};

const ejercicio8 = () => {
  var snack = "Meow Mix";

  function getFood(food) {
    if (food) {
      var snack = "Friskies";
      return snack;
    }
    return snack;
  }

  getFood(false);
};

const ejercicio9 = () => {
  var fullname = "Juan Perez";
  var obj = {
    fullname: "Natalia Nerea",
    prop: {
      fullname: "Aurelio De Rosa",
      getFullname: function () {
        return this.fullname;
      },
    },
  };

  console.log(obj.prop.getFullname());

  var test = obj.prop.getFullname;

  console.log(test());
};

const ejercicio10 = () => {
  function printing() {
    console.log(1);
    setTimeout(function () {
      console.log(2);
    }, 1000);
    setTimeout(function () {
      console.log(3);
    }, 0);
    console.log(4);
  }

  printing();
};
//ejercicio1();
// ejercicio2();
// ejercicio3();
// ejercicio4();
// ejercicio5();
ejercicio6();
// ejercicio7();
// ejercicio8();
// ejercicio9();
// ejercicio10();
