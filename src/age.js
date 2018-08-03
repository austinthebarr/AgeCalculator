export class Person {
  constructor(month, day, year, lifeExpectancy, smoke) {
    this.month = month;
    this.day = day;
    this.year = year;
    this.lifeExpectancy = 78;
  }

  compareGivenBirthday(){
    let birthDate = new Date(this.year, this.month-1, this.day)
    let currentDate = new Date()


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
    return conversion;
  }


  mercuryAge(){
    let mercuryAge = (this.convertAgeFromSec()/.24).toFixed(1);
    let final = parseFloat(mercuryAge)
    return final;
  }

  venusAge(){
    let venusAge = (this.convertAgeFromSec()/.62).toFixed(1);
    let final = parseFloat(venusAge)
    return final;
  }

  marsAge(){
    let marsAge = (this.convertAgeFromSec()/1.88).toFixed(1);
    let final = parseFloat(marsAge);
    return final;
  }

  jupiterAge(){
    let jupiterAge = (this.convertAgeFromSec()/11.86).toFixed(1);
    let final = parseFloat(jupiterAge)
    return final;
  }

  lifeEnd(){
    if(this.smoke === true){
      this.lifeExpectancy - 10;
    }
    return this.lifeExpectancy;
  }


}
