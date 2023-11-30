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



for (let i = 0; i < skills.length; i++) { //for loop iterating for skills array. need the length of array
    var skill = document.createElement('li'); //creating ONE list element for my skills that will be added to HTML
    skill.innerText = skills[i]; //skill is list element. innertext is the text of the actual list. it will pull each skill from array
    skillsList.appendChild(skill);  //appendChild needs to be added to show on HTML one by one
}

const messageForm = document.getElementById('leave_message');
messageForm.addEventListener('submit', (e) => {
    const form = e.target;
    const name = form.usersName;
    const email = form.usersEmail;
    const message = form.usersMessage;
    e.preventDefault();//so everything does not disappear when you press submit.
    const textName = name.value;
    console.log(textName);
    const textEmail = email.value;
    console.log(textEmail);
    const textMessage = message.value;
    console.log(textMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    //newMessage.innerText = textName;
   // messageList.appendChild(newMessage);

    const mail = document.createElement('a');
    mail.href = 'mailto:' + textEmail;
    mail.textContent = textName;

    const span = document.createElement('span');
    span.textContent = textMessage;

    newMessage.appendChild(mail);
    messageList.appendChild(newMessage);
    messageList.appendChild(span);


    //const editButton = document.createElement('button');
    //editButton.innerText = 'edit';
    //editButton.type = 'edit';
   // messageList.appendChild(editButton);
    

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    messageList.appendChild(removeButton);
    //newMessage.appendChild(removeButton);

    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
    });


    



    messageForm.reset();
});




 



