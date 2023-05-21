const handleBedSelect = () => {
  const bed = document.getElementById("bed_dimension");
  const bedsize = document.getElementById("bed-size");
  const bedwidth = document.getElementById("bed-width");
  const bedlength = document.getElementById("bed-length");
  const beddepth = document.getElementById("bed-depth");
  const bedheight = document.getElementById("bed-height");
  switch (bed.value) {
    case "1":
      bedsize.value = "Single 3ft";
      bedwidth.value = 996;
      bedlength.value = 2090;
      beddepth.value = 345;
      bedheight.value = 1110;
      break;
    case "2":
      bedsize.value = "Small Double 4ft";
      bedwidth.value = 1296;
      bedlength.value = 2090;
      beddepth.value = 345;
      bedheight.value = 1110;
      break;
    case "3":
      bedsize.value = "Double 4ft6";
      bedwidth.value = 1466;
      bedlength.value = 2090;
      beddepth.value = 345;
      bedheight.value = 1110;
      break;
    case "4":
      bedsize.value = "King size 5ft";
      bedwidth.value = 1596;
      bedlength.value = 2190;
      beddepth.value = 345;
      bedheight.value = 1110;
      break;
    case "5":
      bedsize.value = "Super King 6ft";
      bedwidth.value = 1896;
      bedlength.value = 2190;
      beddepth.value = 345;
      bedheight.value = 1110;
      break;
    default:
      break;
  }
};
const handleStorageSelect = () => {
  const storage = document.getElementById("storage_dimension");
  const storagesize = document.getElementById("storage-size");
  const storagewidth = document.getElementById("storage-width");
  const storagelength = document.getElementById("storage-length");
  const storageheight = document.getElementById("storage-height");
  const storagevolume = document.getElementById("storage-volume");
  switch (storage.value) {
    case "1":
      storagesize.value = "Single 3ft";
      storagewidth.value = 996;
      storagelength.value = 2090;
      storageheight.value = 345;
      storagevolume.value = 1110;
      break;
    case "2":
      storagesize.value = "Small Double 4ft";
      storagewidth.value = 1296;
      storagelength.value = 2090;
      storageheight.value = 345;
      storagevolume.value = 1110;
      break;
    case "3":
      storagesize.value = "Double 4ft6";
      storagewidth.value = 1466;
      storagelength.value = 2090;
      storageheight.value = 345;
      storagevolume.value = 1110;
      break;
    case "4":
      storagesize.value = "King size 5ft";
      storagewidth.value = 1596;
      storagelength.value = 2190;
      storageheight.value = 345;
      storagevolume.value = 1110;
      break;
    case "5":
      storagesize.value = "Super King 6ft";
      storagewidth.value = 1896;
      storagelength.value = 2190;
      storageheight.value = 345;
      storagevolume.value = 1110;
      break;
    default:
      break;
  }
};
const togglemenu = (ele) => {
  const open = ele.nextElementSibling.classList.contains("open");
  if (open) {
    ele.nextElementSibling.classList.remove("open");
  } else {
    ele.nextElementSibling.classList.add("open");
  }
};
const nextstep = (ele) => {
  const step1 = ele.parentElement.classList.contains("step-1")
  const step2 = ele.parentElement.classList.contains("step-2")
  console.log(ele.parentElement.classList)
  if (step1) {
    document.getElementById("step-1").classList.remove("show", "active");
    document.getElementById("step-1-tab").classList.remove("show", "active");
    document.getElementById("step-2-tab").classList.add("show", "active");
    document.getElementById("step-2").classList.add("show", "active");
  } else if (step2) {
    document.getElementById("step-2").classList.remove("show", "active");
    document.getElementById("step-2-tab").classList.remove("show", "active");
    document.getElementById("step-3-tab").classList.add("show", "active");
    document.getElementById("step-3").classList.add("show", "active");
  }
}
const hanldleselectoption = (ele) => {
  if (ele.classList.contains("size-opt")) {
    const size = document.getElementById("size_id");
    size.innerHTML = ele.children[1].innerHTML;
  } else if (ele.classList.contains("bed-shape-opt")) {
    if (ele.classList.contains("bed-shape-opt" && "headboard")) {
      const head = document.getElementById("headboard_id");
      head.innerHTML = ele.children[1].innerHTML;
    } else if (ele.classList.contains("bed-shape-opt" && "footboard")) {
      const foot = document.getElementById("footboard_id");
      foot.innerHTML = ele.children[1].innerHTML;
    }
  } else if (ele.classList.contains("bed-height-opt")) {
    if (ele.classList.contains("bed-height-opt" && "headboard")) {
      const head = document.getElementById("headboard_height_id");
      head.innerHTML = ele.children[1].innerHTML;
    } else if (ele.classList.contains("bed-height-opt" && "footboard")) {
      const foot = document.getElementById("footboard_height_id");
      foot.innerHTML = ele.children[1].innerHTML;
    }
  }
};
const colors = [
  { name: "Red", image: "red_image.jpg" },
  { name: "Blue", image: "blue_image.jpg" },
  { name: "Green", image: "green_image.jpg" },
  // Add more color objects here...
];
const mat = document.querySelector("material-content");
console.log(mat)


colors.forEach(color => {
  const div = document.createElement("div");
  div.textContent = color.name;
  div.style.backgroundImage = `url(${color.image})`;
  mat.appendChild(div);
});