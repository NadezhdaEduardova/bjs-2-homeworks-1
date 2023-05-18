//Задача № 1

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((objectInCache) => objectInCache.hash === hash);
    if (objectInCache) { 
        console.log("Из кэша: " + objectInCache.result);
        return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args); 
    cache.push({hash, result}); 
    if (cache.length > 5) { 
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}  


//Задача № 2
function debounceDecoratorNew(func, delay) {

  let timeoutId = null;
  wrapper.count ===0;
  wrapper.allCount ===0;
  function wrapper(...args) {
      if (timeoutId === 0) {
        func(...args);
        wrapper.count ++;
      }
      
      if (timeoutId) {
        console.log("Удалили текуий таймаут");
        clearTimeout(timeoutId);
      }
      console.log("Создаем новый таймаут");
      timeoutId = setTimeout(() => {
         timeoutId =null;
         console.log(func(...args));
         console.log("Вызывали колбек");
      }, delay); 
      wrapper.allCount ++;
  }
   return wrapper;
}
