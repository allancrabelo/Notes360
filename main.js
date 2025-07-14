const	form = document.getElementById('form-activity');
let		lines = '';
const	activities = [];
const	grades = [];
const	minimumGrade = parseFloat(prompt("Enter the minimum grade:"))

form.addEventListener('submit', function(e){
	e.preventDefault();

	addLine();
	updateTable();
	updateFinalGrade();
});

function	addLine() {
	const inputActivityName = document.getElementById('activity-name');
	const inputActivityGrade = document.getElementById('activity-grade');

	if (activities.includes(inputActivityName.value)) {
		alert(`This activity ${inputActivityName.value} has already been submitted.`)
	} else {
		activities.push(inputActivityName.value);
		grades.push(parseFloat(inputActivityGrade.value));
		
		let line = '<tr>';
		line += `<td>${inputActivityName.value}</td>`;
		line += `<td>${inputActivityGrade.value}</td>`;
		line += `<td>${inputActivityGrade.value >= minimumGrade ? 'Passed' : 'Failed'}</td>`;
		line += '</tr>';
		
		lines += line;
	}

	inputActivityGrade.value = '';
	inputActivityName.value = '';
}

function	updateTable() {
	const tableBody = document.querySelector('tbody');
	tableBody.innerHTML = lines;
}

function	updateFinalGrade() {
	const	finalGrade = calculateFinalGrade();

	document.getElementById('final-grade-value').innerHTML = finalGrade;
	document.getElementById('final-grade-result').innerHTML = finalGrade >= 7 ? 'Passed' : 'Failed';
};

function	calculateFinalGrade() {
	let	gradeSum = 0;

	for (let i = 0; i < grades.length; i++) {
		gradeSum += grades[i];
	}

	return gradeSum / grades.length;
};