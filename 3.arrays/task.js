// Задача 1
function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])) {
    return true;
  } else {
    return false;
  }
}
compareArrays([2,8,6,4], [2,4,6,8]);

// второе решение
// const compareArrays = ((arr1, arr2) => arr1.lenght === arr2.lenght && arr1.every((item, index) => item === arr2[index]))
  
 // Задача 2 

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, array) => {
    acc += item; 
    if (index === array.length - 1) {
      return acc / array.length;
    } else {
    return acc;
    }
  }, 0); 
  return result;
}

// Второй способ
//function getUsersNamesInAgeRange(users, gender) {
//  let result = users.filter(users => users.gender === gender).reduce((acc, item, index, array) => acc + item.age / array.length, 0);
//  return result;
//}

const people = [
  {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
  {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
  {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
  {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
  {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
  {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
  {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
  {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
  {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
  {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
  {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
  {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
  {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
  {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
];
console.log(getUsersNamesInAgeRange(people, "мужской"));
console.log(getUsersNamesInAgeRange(people, "женский"));
console.log(getUsersNamesInAgeRange([], "женский"));
console.log(getUsersNamesInAgeRange(people, "инопланетянин"));
