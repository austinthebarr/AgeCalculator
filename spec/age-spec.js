import { Birthday } from './../src/age.js';
describe('Birthday', function(){

  it('will test whether an Age has four values', function(){
    let date = new Birthday(9,7,1991,26);
    expect(date.month).toEqual(9);
    expect(date.day).toEqual(7);
    expect(date.year).not.toEqual(1992);
    expect(date.age).toEqual(26);
  });

  it('will convert age to milliseconds', function(){
    let date = new Birthday(9,7,1991,26);
    expect(date.convertToMilli()).toEqual(820480752000);
  });

  it('will convert age to milliseconds', function(){
    let date = new Birthday(9,7,1991,27);
    expect(date.convertToMilli()).not.toEqual(820480752000);
  });

  it('will calcuate age of user', function(){
    let date = new Birthday(9,7,1991);
    expect(date.compareGivenBirthday()).toEqual(27);
  });

  it('will calcuate age of user', function(){
    let date = new Birthday(9,7,1990);
    expect(date.compareGivenBirthday()).toEqual(28);
  });

  it('will calcuate age of user, will not be equal', function(){
    let date = new Birthday(9,7,1991);
    expect(date.compareGivenBirthday()).not.toEqual(25);
  });

  it('will calcuate the mercury age with the number given in specs', function(){
    let date = new Birthday(9,7,1991);
    expect(date.mercuryAge()).toEqual(112.5);
  });

  it('will calcuate the mercury age with the number given in specs, notEQUAL', function(){
    let date = new Birthday(9,7,1991);
    expect(date.mercuryAge()).not.toEqual(111.5);
  });

  it('will calcuate the venus age with the number given in specs', function(){
    let date = new Birthday(9,7,1991);
    expect(date.venusAge()).toEqual(43.5);
  });

  it('will calcuate the venus age with the number given in specs will not equal', function(){
    let date = new Birthday(9,7,1991);
    expect(date.venusAge()).not.toEqual(43);
  });

  it('will calcuate the Mars age with the number given in specs', function(){
    let date = new Birthday(9,7,1991);
    expect(date.marsAge()).toEqual(14.4);
  });

  it('will calcuate the Mars age with the number given in specs, will not Equal', function(){
    let date = new Birthday(9,7,1991);
    expect(date.marsAge()).not.toEqual(14);
  });

  it('will calcuate the Jupiter age with the number given in specs', function(){
    let date = new Birthday(9,7,1991);
    expect(date.jupiterAge()).toEqual(2.3);
  });

  it('will calcuate the Jupiter age with the number given in specs, will not Equal', function(){
    let date = new Birthday(9,7,1991);
    expect(date.jupiterAge()).not.toEqual(3);
  });


});
