
// JavaScript Variables Assignment



// Q1: Declare 3 variables in one statement

var studentName = "Wania",
    courseName = "Web Development",
    batchNumber = 23;


// Display Student Information

document.write("<h1>Student Information</h1>");

document.write("<b>Student Name:</b> " + studentName + "<br>");
document.write("<b>Course:</b> " + courseName + "<br>");
document.write("<b>Batch:</b> " + batchNumber + "<br><br>");


//  Q2: 5 Legal and 5 Illegal Variable Names 


document.write("<h2>Legal Variable Names</h2>");

document.write("1. studentName<br>");
document.write("2. student_age<br>");
document.write("3. $course<br>");
document.write("4. batch23<br>");
document.write("5. _studentName<br><br>");


document.write("<h2>Illegal Variable Names</h2>");

document.write("1. 123student<br>");
document.write("2. student-name<br>");
document.write("3. student name<br>");
document.write("4. var<br>");
document.write("5. class<br><br>");


// Q3: Rules for Naming JS Variables


document.write("<h2>Rules for Naming JS Variables</h2>");


// Rule 1

document.write(
    "<p><b>1.</b> Variable names can only contain " +
    "letters, numbers, $ and _.</p>"
);

document.write(
    "<p><b>Example:</b> $student_23</p>"
);


// Rule 2

document.write(
    "<p><b>2.</b> Variable names must begin with a " +
    "letter, $ or _.</p>"
);

document.write(
    "<p><b>Examples:</b> $name, _name or name</p>"
);


// Rule 3

document.write(
    "<p><b>3.</b> Variable names are case sensitive.</p>"
);

document.write(
    "<p><b>Example:</b> studentName and StudentName are different.</p>"
);


// Rule 4

document.write(
    "<p><b>4.</b> Variable names should not be JS keywords.</p>"
);

document.write(
    "<p><b>Examples:</b> var, let, const and class</p>"
);




document.write("<hr>");
