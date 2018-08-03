export class Birthday {
  constructor(month, day, year, age) {
    this.month = month;
    this.day = day;
    this.year = year;
    this.age = age;
  }

  convertToMilli(){
    let conversion = this.age * 31556952000;
    return conversion;
  }

  compareGivenBirthday(){
    let birthDate = new Date(this.year, this.month-1, this.day).getFullYear();
    let currentDate = new Date().getFullYear();
    let age = currentDate - birthDate;
    return age;
  }

  mercuryAge(){
    let mercuryAge = (this.compareGivenBirthday()/.24).toFixed(1);
    let final = parseFloat(mercuryAge)
    return final;
  }

  venusAge(){
    let venusAge = (this.compareGivenBirthday()/.62).toFixed(1);
    let final = parseFloat(venusAge)
    return final;
  }

  marsAge(){
    let marsAge = (this.compareGivenBirthday()/1.88).toFixed(1);
    let final = parseFloat(marsAge);
    return final;
  }

  jupiterAge(){
    let jupiterAge = (this.compareGivenBirthday()/11.86).toFixed(1);
    let final = parseFloat(jupiterAge)
    return final;
  }

}
