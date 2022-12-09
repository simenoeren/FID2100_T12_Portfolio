import { cdnUrl } from "./env.js";

export function readUrl() {
  const urlString = window.location.search;
  if (urlString) {
    return urlString.slice(1); // slice remove the "?" from the url
  }
  return undefined;
}

export function handleParagraphs(blockContent, container) {
  const blockContainer = document.getElementById(container);

  blockContent.map((p) => {
    if (p._type === "block") {
      let pEL = document.createElement("p");
      if (p.style === "h4") {
        pEL = document.createElement("h4");
      }
      if (p.style === "h3") {
        pEL = document.createElement("h3");
      }
      if (p.style === "h2") {
        pEL = document.createElement("h2");
      }
      if (p.style === "h1") {
        pEL = document.createElement("h1");
      }
      pEL.textContent = p.children[0].text;
      blockContainer.append(pEL);
    }
    if (p._type === "image") {
      const fileNameArray = p.asset._ref.split("-");
      const fileName = `${fileNameArray[1]}-${fileNameArray[2]}.${fileNameArray[3]}`;
      const imgEL = document.createElement("img");
      imgEL.setAttribute("src", `${cdnUrl}${fileName}`);
      imgEL.classList.add("project__blockImg");
      blockContainer.append(imgEL);
    }
  });
}

export function handleImgGalleries(gallery, container) {
  if (gallery && gallery.length > 0) {
    const galleryContainer = document.getElementById(container);
    gallery.map((img) => {
      const imgContainer = document.createElement("img");
      imgContainer.setAttribute("src", img);
      imgContainer.classList.add("gallery-img");
      galleryContainer.append(imgContainer);
    });
  }
}
