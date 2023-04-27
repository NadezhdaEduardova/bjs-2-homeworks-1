// Первая задача

function parseCount(number) {
   const result = parseFloat(number);
  if(isNaN(result)) {
    throw new Error ("Невалидное значение");
  } 
  return result;
}

function validateCount(number) {
  try {
    return parseCount(number);
  } catch(error) {
    return error;
  }
}
    

// Вторая задача

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error ("Треугоьник с такими сторонами не существует");
    }
  }
  
  get perimeter() {
    return this.a + this.b + this.c;
  }
  
  get area() {
    const semiPer = this.perimeter / 2;
    return parseFloat(Math.sqrt(semiPer * (semiPer - this.a) * (semiPer - this.b) * (semiPer - this.c)).toFixed(3));
  }
}
  
function getTriangle(a,b,c) {
  try {
    return new Triangle(a,b,c);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      } 
    }
  }
}
    


    
