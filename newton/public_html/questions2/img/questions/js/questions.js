window.onload = function() {
	changeQuestion(false)
}


function allowDrop(e) {
	    e.preventDefault()
}


/*Function drag allows the element to move around anywhere in the html*/
function drag(e) {
    e.dataTransfer.setData("answer", e.target.id)
}


/*Function drop places the dragged element to desired target. It then checks the answer by splitting the id and matching the index of the answer and chosen id*/
function drop(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("answer");
    e.target.innerHTML = document.getElementById(id).innerHTML 
    //check dragged answer

    var p = id.split("_");
    var qIndex = p[1]
    var aIndex = p[2]
    submitAnswer(qIndex,aIndex);
    disableDragging()
    answered.push({qIdx:qIndex, aIdx:aIndex})
}


/*Function changequestions moves to the previous and next question. If the question was already answered it is disabled. In addition it replaces the blank keyword with a span tag.*/
function changeQuestion(prev) {
		if (prev && qindex > 0) {
			qindex--
		} else if(!prev && qindex < questions.length-1){
			qindex++
		}
		//if question index already answered then check answer 
		ques = questions[qindex]
		prevAns = checkPreviousAnswer(qindex);
		if (prevAns > -1) {
			question = ques.q.replace('&blank&', '<span id="blank">' + questions[qindex].c[prevAns] + '</span>');
			
		} else {
			question = ques.q.replace('&blank&','<span id="blank" ondrop="drop(event)" ondragover="allowDrop(event)">______________</span>');
		}
		document.getElementById("question_div").innerHTML = '<div class="question">' + 'Q' + (qindex+1) + '. ' + question + '</div>';
		ques.c.forEach(function(choice, cindex) {	
			choice = choice.replace('^2','<sup>2</sup>');
			document.getElementById("question_div").innerHTML += 
			'<div class="choice" id="c_'+ qindex + "_" + cindex +'" draggable="true" ondragstart="drag(event)">' + choice + '</div>';	
		})	  
		if (prevAns > -1) {
			submitAnswer(qindex, prevAns)
		}
	
}

function submitAnswer(qIdx, aIdx) {
	var correct = questions[qIdx].a == aIdx
	if (correct)  {
    	document.getElementById("blank").className = "bold correct"
    } else {
    	document.getElementById("blank").className = "bold incorrect"
    }
}

function checkPreviousAnswer(qIdx) {
	var answer = -1
	answered.forEach(function(ans) {
		if (ans.qIdx == qIdx) {
			answer = ans.aIdx
		}
	})
	return answer
}

//if we allow multiple tries then this function should not be called
function disableDragging() {
	document.getElementById("blank").removeAttribute("ondragover");
	document.getElementById("blank").removeAttribute("ondrop");
}

var qindex = -1 
var answered = []
var questions = [
	{
		q:"If you double the amount of force on an object with the same mass, how does that affect the acceleration? The acceleration &blank&",
		c: ["doubles","stays the same"],
		a: 0
	},
	{
		q:" A small child has a wagon that weights a mass of 20kg, the child pulls on the wagon with a force of 5 N. The acceleration of the wagon will be &blank&?",
		c: ["1.0 m/s^2","0.25 m/s^2","1.75 m/s^2"],
		a: 1
	},
	{
		q:"There are two boys holding a basketball with a mass of 40kg. The tall boy dribbles the ball with a force of 20 N, and the short boy dribble the ball with a force of 10 N. Both boys shoot at the basket at the same time. The &blank& boy will hit the basket first.",
		c: ["short","tall"],
		a: 1
	},
	{
		q:"If an object is at rest, inertia will keep it at rest: &blank&",
		c: ["true","false"],
		a: 0
	}
]