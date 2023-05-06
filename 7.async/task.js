class AlarmClock {
  cnstruction (alarmCollection, intervalId) {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  
  function addClock(time, callback) {
     if (!time || callback === undefined) {
       throw new Error("Отсутствуют обязательные аргументы");
     }
     if (this.alarmCollection.some(alarm => alarm.time === time)) {
       console.warn("Уже присутствует звонок на это же время");
     }
     this.alarmCollection.push({callback, time, canCall: true});
  }
  
  function removeClock(time) {
     this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }
  
  function getCurrentFormattedTime() {
     return new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  }
  
  function start() {
     if (this.intervalId !== null) {
       return;
    }
    this.intervalId = setInterval(() => 
       this.alarmCollection.forEach((alarm) => {
         
         if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
           this.alarm.canCall = false;
           this.alarm.callback();
         }
         
       }),
       1000
     ); 
   } 
   
   function stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
   }
   
   function resetAllCalls() {
      this.alarmCollection.forEach(alarm) => 
        alarm.canCall = true;
   }
      
  function clearAlarms() {
     this.stop();
     this.alarmCollection = [];
   }
 }  
   
     
    
  
