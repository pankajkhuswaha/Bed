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
}
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
}