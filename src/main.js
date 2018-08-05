import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Person } from './age.js';
$(function () {
  $("#birthday").submit(function () {
    event.preventDefault();
    const day = parseInt($(".day").val());
    const month = parseInt($(".month").val());
    const year = parseInt($(".year").val());
    let newPerson = new Person(month, day, year);
    const newPersonAge = newPerson.convertAgeFromSec();
    $(".earthAge").text(newPersonAge);
    $(".mercuryAge").text(newPerson.mercuryAge(newPersonAge));
    $(".venusAge").text(newPerson.venusAge(newPersonAge));
    $(".marsAge").text(newPerson.marsAge(newPersonAge));
    $(".jupiterAge").text(newPerson.jupiterAge(newPersonAge));
  });
});