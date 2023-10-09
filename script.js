let openModal = document.getElementById('openModal')
/* 
let newModal = document.getElementById('newModal')
*/

add.addEventListener('click', function() {
const modal = document.createElement('div')
modal.id = 'newModal'
document.body.appendChild(modal)
})

/* 
add.addEventListener('click', function() {
  newModal.style.display = 'block'
})
*/

class toDo {
    constructor(title, description, dueDate, priority) {
this.title = title
this.description = description
this.dueDate = dueDate
this.priority = priority
    }
}