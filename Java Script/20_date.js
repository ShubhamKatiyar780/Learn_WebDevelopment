const a = new Date(); // Current Time
const b = new Date('1999-07-20');
// console.log(a);
// console.log(b);

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
// const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// JavaScript counts months from 0 to 11

// a month higher than 11, will not result in an error but add the overflow to the next year
const d = new Date(2018, 15, 24, 10, 33, 30);
// Is the same as
const e = new Date(2019, 3, 24, 10, 33, 30);
// console.log(d);
// console.log(e);

// a day higher than max, will not result in an error but add the overflow to the next month
const f = new Date(2018, 5, 35, 10, 33, 30);
// Is the same as:
const g = new Date(2018, 6, 5, 10, 33, 30);
// console.log(f);
// console.log(g);

// If you supply only one parameter it will be treated as milliseconds
const h = new Date(2018);
// console.log(h);

// One and two digit years will be interpreted as 19xx
const i = new Date(99, 11, 24); // 1999-12-24
console.log(i);
// console.log(i.toString()); // typeof  String
// console.log(i.toDateString());
// console.log(i.toUTCString());
// console.log(i.toISOString());


// JavaScript stores dates as number of milliseconds since January 01, 1970.
// Zero time is January 01, 1970 00:00:00 UTC.
// One day (24 hours) is 86 400 000 milliseconds.


// use the Date.parse() method to convert it to milliseconds
let msec = Date.parse("March 21, 2012");
console.log(msec);
// then use the number of milliseconds to convert it to a date object
const j = new Date(msec);
console.log(j);




// Date Get Methods
// getFullYear()   	    Get year as a four digit number (yyyy)
// getMonth()      	    Get month as a number (0-11)
// getDate()       	    Get day as a number (1-31)
// getDay()	            Get weekday as a number (0-6)
// getHours()	        Get hour (0-23)
// getMinutes()	        Get minute (0-59)
// getSeconds()	        Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	        Get time (milliseconds since January 1, 1970)




// Date.now()            returns the number of milliseconds since January 1, 1970
// getTimezoneOffset()   returns the difference (in minutes) between local time an UTC time




// Set Date Methods
// Set Date methods are used for setting a part of a date:
// setDate()	        Set the day as a number (1-31)
// setFullYear()	    Set the year (yyyy)
// setHours()	        Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	        Set the minutes (0-59)
// setMonth()	        Set the month (0-11)
// setSeconds()	        Set the seconds (0-59)
// setTime()	        Set the time (milliseconds since January 1, 1970)