/**
 * Created by Yannick on 23-12-2019.
 */

/* 
Question 09:
Transférer les valeurs Fahrenheit de 10 à 20 en Celsius par tranche de 1. */

var celcius;
for(var f=10; f<=20; f++){
	celcius = (5/9)*(f-32);
	document.write(f + " Fahrenheits = " + celcius.toFixed(2) + " celcius<br>");
}

