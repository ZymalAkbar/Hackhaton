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
<p><b>NAME : </b>${name1}</p>
<p><b>EMAIL : </b>${email}</p>
<p><b>CONTACT : </b>${contact}</p>


<h3>EDUCATION</h3>
<p><b>O LEVELS : </b>${olevels}</p>
<p><b>A LEVELS : </b>${alevels}</p>
<p><b>BACHELORS : </b>${bachelors}</p>

<h3>SKILLS</h3>
<p>${skills}</p>

<h3>EXPERIENCE</h3>
<p>${experience}</p>
`;
if(dynamicResume){
    dynamicResume.innerHTML=resume;
}else{
    console.error('The resume element is missing')
}
});