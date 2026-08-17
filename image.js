function openImage(image) {
    document.getElementById("imageBox").style.display = "flex";
    document.getElementById("bigImage").src = image.src;
}

function closeImage() {
    document.getElementById("imageBox").style.display = "none";
}

function removeImage(button) {
    button.parentElement.remove();
}

function addImage() {

    let input = document.getElementById("imageInput");

    if (input.files.length === 0) {
        return;
    }

    let image = document.createElement("img");

    image.src = URL.createObjectURL(input.files[0]);

    image.onclick = function() {
        openImage(this);
    };

    let div = document.createElement("div");

    let button = document.createElement("button");
    button.innerText = "Remove";

    button.onclick = function() {
        removeImage(this);
    };

    div.appendChild(image);
    div.appendChild(button);

    document.getElementById("gallery").appendChild(div);

    input.value = "";
}