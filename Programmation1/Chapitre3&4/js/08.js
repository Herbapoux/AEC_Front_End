/**
 * Created by Yannick on 23-12-2019.
 */

/* 
Question 08:
Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32))
*/

var celcius;
for(var f=-40; f<=40; f+=5){
	celcius = (5/9)*(f-32);
	document.write(f + " Fahrenheits = " + celcius.toFixed(2) + " celcius<br>");
}
