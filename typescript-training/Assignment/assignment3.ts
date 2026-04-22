//create array and store data
let studentNames: string[]=["Suresh","Mahesh","Naresh"];
let marks:number[]=[75,80,82];
let total:number=0;
let avg:number=0.0;

//find length of array
let len:number=(studentNames.length,marks.length);

// Print array values
console.log("Present values")
for(let i:number=0;i<len;i++)
{
  console.log(`${studentNames[i]}: ${marks[i]}`);
}

//Add 10 marks to each student
for(let i:number=0;i<len;i++)
{
    marks[i]=marks[i]+10;
    total=total+marks[i];
}

// Average marks of all students
avg=total/3;

// Print Updated Marks
console.log("****updated Marks****");

for(let i:number=0;i<len;i++)
{
  console.log(`${studentNames[i]} : ${marks[i]}`);
}

// Print average marks for all students
console.log(`Average marks of all students: ${avg}`);
