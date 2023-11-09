var today = new Date();

var thisYear = today.getFullYear();

var footer = document.querySelector('.myFooter');

var copyright = document.createElement('p');

var myName = "Scherly Etienne";

footer.innerHTML = thisYear + " " + myName;

footer.appendChild(copyright);



const skills = ["HTML", "CSS", "JavaScript", "Visual Studio Code", "GitHub", "Git"];

var skillsSection = document.getElementById('skills');

var skillsList = skillsSection.querySelector('ul');



for (let i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);  
}



 



