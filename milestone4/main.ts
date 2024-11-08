const form=document.getElementById('form') as HTMLFormElement;
const dynamicResume=document.getElementById('dynamic') as HTMLDivElement;

form.addEventListener('submit',(event:Event) => {event.preventDefault();

const name1 =(document.getElementById('name') as HTMLInputElement).value;
const email =(document.getElementById('email') as HTMLInputElement).value;
const contact =(document.getElementById('contact') as HTMLInputElement).value;
const olevels =(document.getElementById('olevels') as HTMLInputElement).value;
const alevels =(document.getElementById('alevels') as HTMLInputElement).value;
const bachelors =(document.getElementById('bachelors') as HTMLInputElement).value;
const skills =(document.getElementById('skills') as HTMLInputElement).value;
const experience =(document.getElementById('experience') as HTMLInputElement).value;

const resume =`
<h2><b>RESUME</b></h2>
<h3>PERSONAL INFORMATION</h3>
<p><b>NAME : </b><span contenteditable="true">${name1}</span></p>
<p><b>EMAIL : </b><span contenteditable="true">${email}</span></p>
<p><b>CONTACT : </b><span contenteditable="true">${contact}</span></p>

<h3>EDUCATION</h3>
<p><b>O LEVELS : </b><span contenteditable="true">${olevels}</span></p>
<p><b>A LEVELS : </b><span contenteditable="true">${alevels}</span></p>
<p><b>BACHELORS : </b><span contenteditable="true">${bachelors}</span></p>

<h3>SKILLS</h3>
<p contenteditable="true">${skills}</p>

<h3>EXPERIENCE</h3>
<p contenteditable="true">${experience}</p>
`;
if(dynamicResume){
    dynamicResume.innerHTML=resume;
}else{
    console.error('The resume element is missing')
}
});