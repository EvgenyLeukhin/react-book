# Variables

To save some data in JS you should use variables, it is a place where your data lives. Giving some date realize by equall operator (=);

## Initialization

You can initialize variables without giving some data.

```js
let some;
```

## Multi-Initialization

```js
// With "," operator.
let some1, some2, some3 = 'String;'

let some1 = 'String 1',
    some2 = 'String 2',
    some3 = 'String 3';

let some = ('string1', 'string2', 'string3' ); // string3

// distructive initialization
const [a, b, c, d] = [1, 2, 3, 4];
console.log(a); // 1
```

```js
let variable = 'String';

let number = 123;

let bool = true;

let object = {};

let array = [];

// output data from vars to console
console.log(number); // 123
```

## Naming

Должно отвечать на вопрос "Кто?, Что?". Use camelCase. Именовать константы нужно заглавными буквами, разделяя слова "_".

### Correct

```js
let thisIsSomeString = 'This is some string';

let $some = 'With $ symbol';

const THIS_IS_SOME_CONST = 'This is some const';
```

Нельзя именовать переменные, начиная с цифры, использовать для разделения слов "-", использовать ключевые слова.

### Wrong

```js
let 123some;
let class;
var 1score;
var %Score;
var №score;
var &score;
var score-score;
var privet;
```

### Keywords

```js
// ES-2015
break case class catch const continue debugger default
delete do elseexport extends finally for function if
import in instanceof let new return super switch this
throw try typeof var void while with yield

// for future
enum await implements package protected static interface
private public

// old keywords
abstract boolean byte char double final float goto int
long native short synchronized transient volatile
```

### Register

This is differend variables.

```js
let some;
let Some;
let somE;
```

## Var

Outdate keyword with global scope. You should use let or const syntax.

## Let

Нельзя повторно переобъявлять.
В отличие от var, scope у let - это блок, в кот. выполянется объявление.
В {} ограничивается scope у let, и даже переменные с одинаковыми названиями на разных уровнях ничего не знают друг о друге.

```js
let a = 5;
a = 15;       // Изменять можно

let a = 15;   // Ошибка! - Переобъявлять нельзя


// Scope
let a = 5;

console.log(a);   // 5

{
  let a = 15;
  console.log(a); // 15
}
```

## Const

Нельзя повторно переобъявлять и изменять. При объявление этой константы единожды, ей нельзя будет присвоить другое значение, иначе будет ошибка. Scope у const действует также как и у let. На разных уровнях константы ничего не знают друг о друге.

```js
const a = 5;

a = 15;       // Ошибка!

const a = 15; // Ошибка!
```

![Image alt text](https://raw.githubusercontent.com/EvgenyLeukhin/js-book/master/static/img/vars.png)
