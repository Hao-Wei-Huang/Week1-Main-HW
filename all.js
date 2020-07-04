// let list = [];

// let NewItembtn = document.querySelector(".btn-new-item");
// let listGroup = document.querySelector(".list-group");

// NewItembtn.addEventListener("click", function() {
//     let inputTask = document.querySelector(".input-task");
//     let newTask = inputTask.value;
//     inputTask.value = "";
//     if (newTask !== "") {
//         list.push(newTask);
//         render();
//     }
// });

// listGroup.addEventListener("click", (e) => {
//     let removedIndex = e.target.parentNode.dataset.index;
//     if (removedIndex != undefined) {
//         list.splice(removedIndex, 1);
//         render();
//     }
// });

// document.querySelector("#removalModal .btn-removal-all-item").addEventListener("click", () => {
//     list = [];
//     render();
// });

// function render() {
//     listGroup.innerHTML = `
//         ${list.map((item, index) => `
//         <li class="list-group-item d-flex">
//             <div class="form-check mr-auto">
//                 <input class="form-check-input" type="checkbox" id= "check${index}">
//                 <label class="form-check-label" for= "check${index}">
//                     ${item}
//                 </label>
//             </div>
//             <a href="#" class="btn-item-removal mr-3" data-index = ${index}>
//                 <i class="fas fa-trash-alt"></i>
//             </a>
//         </li>
//         `).join("")}
//     `;
//     document.querySelector(".task-count").textContent = list.length;
// }

var app = new Vue({
    el: '#app',
    data: {
        inputText: "",
        list: [],
        itemCount: 0,
    },
    methods: {
        addItem() {
            if (this.inputText != "") {
                this.list.push(this.inputText);
                this.inputText = "";
            }
        },
        removeItem(e) {
            let removedIndex = e.target.parentNode.dataset.index;
            this.list.splice(removedIndex, 1);
        },
        removeAllItems() {
            this.list = [];
        }
    },
    computed: {
        getItemCount() {
            return this.list.length;
        },
    }
});