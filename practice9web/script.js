
function calculateAverage() {
  const students = [80, 77, 88, 95, 68];
  const average = students.reduce((sum, mark) => sum + mark, 0) / students.length;

  let grade;
  if (average >= 90) grade = 'A';
  else if (average >= 80) grade = 'B';
  else if (average >= 70) grade = 'C';
  else if (average >= 60) grade = 'D';
  else grade = 'F';

  document.getElementById("averageOutput").textContent = `Средняя оценка: ${average}, Оценка: ${grade}`;
}


document.getElementById("dblClickButton").addEventListener("dblclick", function() {
  alert("Двойной клик обнаружен!");
});


function runFizzBuzz() {
  const output = document.getElementById("fizzBuzzOutput");
  output.innerHTML = '';
  for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement("li");
    if (i % 3 === 0 && i % 5 === 0) listItem.textContent = "FizzBuzz";
    else if (i % 3 === 0) listItem.textContent = "Fizz";
    else if (i % 5 === 0) listItem.textContent = "Buzz";
    else listItem.textContent = i;
    output.appendChild(listItem);
  }
}
