const addInput = document.querySelector('.add-input')
const addBtn = document.querySelector(".add-btn")
const todoList = document.querySelector(".todo-list")

let allTodos = JSON.parse(localStorage.getItem('todos')) || []

addBtn.addEventListener("click", ()=>{
      addNewItem()
})

addInput.addEventListener('keypress', (e)=>{
	if(e.key === "Enter"){
		addNewItem()
	}
})

const addNewItem = ()=>{
	if(addInput.value.trim() === '') return alert("Введите текст")
	allTodos = [...allTodos, addInput.value]
	localStorage.setItem('todos', JSON.stringify(allTodos))
	addInput.value = ''
	drawList(allTodos)
}

const drawItem = (itemText)=>{
	const li = document.createElement('li')
	li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
	const span = document.createElement('span')
	span.textContent = itemText
	const button = document.createElement('button')
	button.classList.add('btn', 'btn-danger', 'btn-sm', 'delete-btn')
	button.textContent = 'Delete'
	li.appendChild(span)
	li.appendChild(button)
	todoList.appendChild(li)
}

const clickDeleteBtn = ()=>{
	const deleteButtons = document.querySelectorAll('.delete-btn')
	deleteButtons.forEach((deleteBtn, btnIndex)=>{
		deleteBtn.addEventListener('click', ()=>{

			allTodos = allTodos.filter((todoFromStorage, indexFromStorage)=> btnIndex !== indexFromStorage)
			localStorage.setItem('todos', JSON.stringify(allTodos))
			drawList(allTodos)
		})
	})

}

const drawList = (array) => {
	todoList.innerHTML = ''
	array.forEach((todo)=>{
		drawItem(todo)
	})
	clickDeleteBtn()
}
drawList(allTodos)































// addBtn.addEventListener("click", ()=>{
// 	if(addInput.value.length === 0) return alert("Введите текст")
// 	const li = document.createElement('li')
// 	li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
// 	const span = document.createElement('span')
// 	span.textContent = addInput.value
// 	const button = document.createElement('button')
// 	button.classList.add('btn', 'btn-danger', 'btn-sm', 'delete-btn')
// 	button.textContent = 'Delete'
// 	li.appendChild(span)
// 	li.appendChild(button)
//     todoList.appendChild(li)
// 	addInput.value = ""
// 	deleteItem()
// })


// const deleteItem = () =>{
// 	const listGroupItems = document.querySelectorAll('.list-group-item')
// 	const deleteBtn = document.querySelectorAll('.delete-btn')
// 	deleteBtn.forEach((oneDeleteBtn, index)=>{
// 		oneDeleteBtn.addEventListener('click',()=>{
// 			listGroupItems[index].remove()
// 		})
// 	})
// }
//
// deleteItem()
//через listGroupItems

// //через parentElement




// localStorage.setItem('name', 'ivan')
//
// const str = '["petya", "vasya"]'
// alert(JSON.parse(str)[0])
//
// const array = [5, 6]
// alert(JSON.stringify(str)[0])