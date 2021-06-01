fetch("https://kea2sem-5899.restdb.io/rest/monsi-projects", {
  method: "GET",
  headers: {
    "x-apikey": "606d6e58f592f7113340ecc4",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProjects(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showProjects(projects) {
  console.log(projects);
  //grab the template
  const template = document.querySelector(".single-card").content;
  //loop through data.comments
  projects.forEach((project) => {
    console.log(project);
    const copy = template.cloneNode(true);
    copy.querySelector(".project-title").textContent = project.name;
    copy.querySelector(".project-info p").textContent = project.description;
    copy.querySelector(".project-pictures img").src = `${project.image_square}`;
    document.querySelector("#projects-cards").appendChild(copy);
  });
}
