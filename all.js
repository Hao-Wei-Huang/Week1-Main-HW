let list = [];

let NewItembtn = document.querySelector(".btn-new-item");

NewItembtn.addEventListener("click", function() {
    let inputTask = document.querySelector(".input-task");
    let newTask = inputTask.value;
    inputTask.value = "";
    if (newTask !== "") {
        list.push(newTask);
        render();
    }
});

document.querySelector("#removalModal .btn-removal-all-item").addEventListener("click", () => {
    list = [];
    render();
});

function removeItem(e) {
    let listItem = this.parentNode;
    let removedIndex = listItem.querySelector(".form-check-input").id.slice(5);
    list.splice(removedIndex, 1);
    render();
}

function render() {
    let listGroup = document.querySelector(".list-group");
    listGroup.innerHTML = `
        ${list.map((item, index) => `
        <li class="list-group-item d-flex">
            <div class="form-check mr-auto">
                <input class="form-check-input" type="checkbox" id= "check${index}">
                <label class="form-check-label" for= "check${index}">
                    ${item}
                </label>
            </div>
            <a href="#" class="btn-item-removal mr-3">
                <i class="fas fa-trash-alt"></i>
            </a>
        </li>
        `).join("")}
    `;
    document.querySelector(".task-count").textContent = list.length;
    let itemRemovalBtn  = document.querySelectorAll(".btn-item-removal");
    itemRemovalBtn.forEach(item => item.addEventListener("click",removeItem)); 
}