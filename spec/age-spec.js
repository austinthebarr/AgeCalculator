import { Person } from './../src/age.js';
describe('Person', function(){

  // it('will test whether an Age has four values', function(){
  //   let date = new Birthday(9,7,1991,26);
  //   expect(date.month).toEqual(9);
  //   expect(date.day).toEqual(7);
  //   expect(date.year).not.toEqual(1992);
  //   expect(date.age).toEqual(26);
  // });

  it('will convert age to seconds', function(){
    let date = new Person(9,7,1990);
    expect(date.compareGivenBirthday()).toEqual(852055200);
  });

  it('will convert age to seconds will fail', function(){
    let date = new Person(7,7,1991);
    expect(date.convertAgeFromSec()).not.toEqual(820480752000);
  });

  it('will calcuate age of user', function(){
    let date = new Person(9,7,1991);
    expect(date.convertAgeFromSec()).toEqual(26);
  });

  it('will calcuate age of user different date', function(){
    let date = new Person(1,7,1991);
    expect(date.convertAgeFromSec()).toEqual(27);
  });

  it('will calcuate age of user, will not be equal', function(){
    let date = new Person(9,7,1991);
    expect(date.convertAgeFromSec()).not.toEqual(25);
  });

  it('will calcuate the mercury age with the number given in specs', function(){
    let date = new Person(9,7,1990);
    expect(date.mercuryAge(date.convertAgeFromSec())).toEqual(112.5);
  });

  it('will calcuate the mercury age with the number given in specs, notEQUAL', function(){
    let date = new Person(9,7,1990);
    expect(date.mercuryAge(date.convertAgeFromSec())).not.toEqual(111.5);
  });

  it('will calcuate the venus age with the number given in specs', function(){
    let date = new Person(9,7,1990);
    expect(date.venusAge(date.convertAgeFromSec())).toEqual(43.5);
  });

  it('will calcuate the venus age with the number given in specs will not equal', function(){
    let date = new Person(9,7,1990);
    expect(date.venusAge(date.convertAgeFromSec())).not.toEqual(43);
  });

  it('will calcuate the Mars age with the number given in specs', function(){
    let date = new Person(9,7,1990);
    expect(date.marsAge(date.convertAgeFromSec())).toEqual(14.4);
  });

  it('will calcuate the Mars age with the number given in specs, will not Equal', function(){
    let date = new Person(9,7,1990);
    expect(date.marsAge(date.convertAgeFromSec())).not.toEqual(14);
  });

  it('will calcuate the Jupiter age with the number given in specs', function(){
    let date = new Person(9,7,1990);
    expect(date.jupiterAge(date.convertAgeFromSec())).toEqual(2.3);
  });

  it('will calcuate the Jupiter age with the number given in specs, will not Equal', function(){
    let date = new Person(9,7,1991);
    expect(date.jupiterAge(date.convertAgeFromSec())).not.toEqual(3);
  });

  it('lifeExpectancy will drop to 68 if user smokes', function(){
    let date = new Person(9,7,1990);
    expect(date.smoking(true)).toEqual(68);
  });

  it('user can see what there lifeExpectancy is in all planets', function(){
    let person = new Person(9,8,1991);
    expect(person.mercuryAge(person.lifeExpectancy)).toEqual(325);
    expect(person.venusAge(person.lifeExpectancy)).toEqual(125.8);
    expect(person.marsAge(person.lifeExpectancy)).toEqual(41.5);
    expect(person.jupiterAge(person.lifeExpectancy)).toEqual(6.6);
  });

  it('user can see what there lifeExpectancy is in all planets and they smoke', function(){
    let person = new Person(9,8,1990);
    person.smoking(true);
    expect(person.mercuryAge(person.lifeExpectancy)).toEqual(283.3);
    expect(person.venusAge(person.lifeExpectancy)).toEqual(109.7);
    expect(person.marsAge(person.lifeExpectancy)).toEqual(36.2);
    expect(person.jupiterAge(person.lifeExpectancy)).toEqual(5.7);
  });

  it('user will see how many years they surpassed their lifeExpectancy in mercury ', function(){
    let person = new Person(9,8,1936);
    expect(person.mercuryAge(person.convertAgeFromSec())).toEqual(12.5);
  });

  it('user will see how many years they surpassed their lifeExpectancy in Venus ', function(){
    let person = new Person(9,8,1936);
    expect(person.venusAge(person.convertAgeFromSec())).toEqual(4.8);
  });

  it('user will see how many years they surpassed their lifeExpectancy in Mars ', function(){
    let person = new Person(9,8,1936);
    expect(person.marsAge(person.convertAgeFromSec())).toEqual(1.6);
  });

  it('user will see how many years they surpassed their lifeExpectancy in Jupiter', function(){
    let person = new Person(9,8,1936);
    expect(person.jupiterAge(person.convertAgeFromSec())).toEqual(0.3);
  });

  it('user will see how many years they surpassed their lifeExpectancy in all planets with being a smoker', function(){
    let person = new Person(9,8,1936);
    person.smoking(true)
    expect(person.mercuryAge(person.convertAgeFromSec())).toEqual(54.2);
    expect(person.venusAge(person.convertAgeFromSec())).toEqual(21);
    expect(person.marsAge(person.convertAgeFromSec())).toEqual(6.9);
    expect(person.jupiterAge(person.convertAgeFromSec())).toEqual(1.1);
  });

  it('will return amount of years the user has surpsed lifeExpectancy', function(){
    let person = new Person(9,8,1936);
    expect(person.convertAgeFromSec()).toEqual(3);
  });
});
