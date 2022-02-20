var str = require('node-strings');

const text=str.bold('text and effect');
const text2="Dear Sir/Ma'am,\nMy name is Abhilasha Angaitkar."+ 
'Passionate machine learning engineer with handsOn experience in predictive modeling.'+
'I have completed'+str.bold(' Machine Learning And AI Analyst')+' certification from '+str.bold("'Symbiosis Skills And Professional University'.")+
'during my certification I Worked on vairous Practical Problems in various domains.'+
'I am very Excited to work on statistical machine learning solutions.'+
'For more information, I have attached my resume for your consideration.'+
'Thank you for your valuable time.'+
'I am always reachable on my email and phone number.\nSincerely,\nAbhilasha Angaitkar.'
  ;
console.log(text2);