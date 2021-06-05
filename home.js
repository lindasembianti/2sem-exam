fetch("https://kea2sem-5899.restdb.io/rest/monsi-projects", {
  method: "GET",
  headers: {
    "x-apikey": "606d6e58f592f7113340ecc4",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showCovers(response);
    showCards(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showCovers(covers) {
  console.log(covers);
  // sort by name
  covers.sort(function (a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  const template = document.querySelector(".project-container").content;
  covers.forEach((cover) => {
    console.log(cover);
    const copy = template.cloneNode(true);
    copy.querySelector(".cover-link").href = `#${cover.name_short}`;
    copy.querySelector(".project-name").textContent = cover.name;
    copy.querySelector(".cover").src = `${cover.image_full}`;
    document.querySelector("#all-projects").appendChild(copy);
  });
}

function showCards(projects) {
  console.log(projects);
  // sort by name
  projects.sort(function (a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  //grab the template
  const template = document.querySelector(".single-card").content;
  //loop through data.comments
  projects.forEach((project) => {
    console.log(project);
    const copy = template.cloneNode(true);
    copy.querySelector(".card-div").id = `${project.name_short}`;
    copy.querySelector(".project-title").textContent = project.name;
    copy.querySelector(".project-info p").textContent = project.description;
    copy.querySelector(".project-pictures img").src = `${project.image_square}`;
    copy.querySelector(".outlined h2").textContent = project.number;
    document.querySelector("#projects-cards").appendChild(copy);
  });
}
