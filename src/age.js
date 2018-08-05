export class Person {
  constructor(month, day, year) {
    this.month = month;
    this.day = day;
    this.year = year;
    this.lifeExpectancy = 78;
  }

  compareGivenBirthday(){
    let birthDate = new Date(this.year, this.month-1, this.day);
    const currentDate = new Date();
    let age = ((currentDate.getFullYear() * 31557600) - (birthDate.getFullYear() * 31557600));
    if(currentDate.getMonth() < birthDate.getMonth())
    {
      age -= 31557600;
    } else if((currentDate.getMonth()) === (birthDate.getMonth()) && (currentDate.getDay()) > (birthDate.getDay())){
      age -= 31557600;
    }
    return age;

  }

  convertAgeFromSec(){
    let conversion = this.compareGivenBirthday() / 31557600;
    if(conversion > this.lifeExpectancy)
    {
      conversion -= this.lifeExpectancy;
    }
    return conversion;
  }

  mercuryAge(age){
    let mercuryAge = (age/.24).toFixed(1);
    let final = parseFloat(mercuryAge);
    return final;
  }

  venusAge(age){
    let venusAge = (age/.62).toFixed(1);
    let final = parseFloat(venusAge);
    return final;
  }

  marsAge(age){
    let marsAge = (age/1.88).toFixed(1);
    let final = parseFloat(marsAge);
    return final;
  }

  jupiterAge(age){
    let jupiterAge = (age/11.86).toFixed(1);
    let final = parseFloat(jupiterAge);
    return final;
  }

  smoking(smoker){
    if(smoker === true){
      this.lifeExpectancy -= 10;
    }
    return this.lifeExpectancy;
  }

}
