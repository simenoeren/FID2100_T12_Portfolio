// import navbarMobile from "./menu.js";
import { readUrl } from "./utils.js";
import { sanityUrl } from "./env.js";
import { handleParagraphs } from "./utils.js";
import { handleImgGalleries } from "./utils.js";

// navbarMobile();

const urlString = readUrl();

// querystring for sanity

const queryAllProjects = `
*[_type == "project"]{
    title,
    _id,
    slug,
    "bilde": cover.asset->url,
    gallery[]
  }
`;

const querySingleProject = `
  *[slug.current == "${urlString}"]{
    title,
    "cover": cover.asset->url,
    introduction,
    projectType,
    projectDelivery,
    projectTime,
    projectSolution,
    projectLinks,
    tools[]->{"name": software, "image": logo.asset->url},
    process,
    gallery,
    backgroundColor,
  }`;

// end of queries

async function getProject() {
  console.log(urlString);
  const response = await fetch(`${sanityUrl}${encodeURI(querySingleProject)}`);
  const { result } = await response.json();
  console.log(result);
  renderSingleProject(result);
}

function renderSingleProject(result) {
  console.log(result);
  const coverProject = document.querySelector(".project--cover");
  coverProject.setAttribute("src", result[0].cover);
  coverProject.setAttribute(
    "style",
    `background-color: ${result[0].backgroundColor}`
  );
  const titleEl = document.querySelector(".project__h1");
  titleEl.textContent = result[0].title;
  handleParagraphs(result[0].introduction, "project-intro");
  handleParagraphs(result[0].process, "project-process");
  const projectTypeEl = document.getElementById("project-type");
  projectTypeEl.textContent = result[0].projectType;
  const projectDeliveryEl = document.getElementById("project-delivery");
  projectDeliveryEl.textContent = result[0].projectDelivery;
  const projectTimeEl = document.getElementById("project-time");
  projectTimeEl.textContent = result[0].projectTime;
  const projectSolutionEl = document.getElementById("project-solution");
  projectSolutionEl.textContent = result[0].projectSolution;
  const projectLinksEl = document.getElementById("project-links");
  //projectLinksEl.textContent = result[0].projectLinks;
  /* function tools, socials and gallery */
  plotTools(result[0].tools, "tools--wrapper");
}

function plotTools(tools, container) {
  const toolsEl = document.getElementById(container);
  tools.map((tool) => {
    const toolContainer = document.createElement("div");
    toolContainer.classList.add("tool");
    const imgContainer = document.createElement("img");
    imgContainer.setAttribute("src", tool.image);
    imgContainer.setAttribute("alt", `icon of ${tool.name}`);
    imgContainer.classList.add("tool--image");
    toolContainer.append(imgContainer);
    const toolTitle = document.createElement("span");
    toolTitle.textContent = tool.name;
    toolContainer.append(toolTitle);
    toolsEl.append(toolContainer);
  });
}

if (urlString !== undefined) {
  getProject();
}

async function getAllProjects() {
  const response = await fetch(`${sanityUrl}${encodeURI(queryAllProjects)}`);
  const { result } = await response.json();

  renderProjectsList(result);
}

function renderProjectsList(result) {
  const projectsEl = document.querySelector(".projects__wrapper");

  result.forEach((project) => {
    const cardEl = document.createElement("a");
    cardEl.classList.add("card");
    cardEl.setAttribute("href", `/projects/?${project.slug.current}`);
    const coverEl = document.createElement("img");
    coverEl.setAttribute("src", project.bilde);
    coverEl.classList.add(`card__image--${project.slug.current}`);
    const titleEl = document.createElement("h3");
    titleEl.classList.add("card__title");
    titleEl.textContent = project.title;
    cardEl.append(coverEl);
    cardEl.append(titleEl);
    projectsEl.append(cardEl);
  });
}

if (urlString === undefined) {
  getAllProjects();
}
