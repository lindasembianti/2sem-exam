const form = document.querySelector("form");
//console.log(form.elements);
form.elements.fname.focus();
/*form.elements.title.addEventListener("blur",()=>
{
    form.elements.title.value="";
})*/

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#ty-message").classList.add("animate");
  form.elements.fname.value = "";
  form.elements.phone_number.value = "";
  form.elements.project_type.value = "";
  form.elements.email_felt.value = "";
  form.elements.message.value = "";
});
