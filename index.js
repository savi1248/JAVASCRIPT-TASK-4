const input = document.getElementById("input")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById('list')



addBtn.addEventListener('click',() => {

    if(input.value == '' ) {
        alert("Enter something...")
    } 
    else{

        const li = document.createElement('li')
        const span = document.createElement('span')
        const p = document.createElement('p')
        
        
        p.className = ''
        p.innerText = input.value

    span.innerText = 'delete'
    span.addEventListener('click',() => {
        list.removeChild(li)
    })
    
    li.addEventListener('click',() => {
        p.classList.toggle('checked')
    })

    li.appendChild(p)
    li.appendChild(span)
    list.appendChild(li)

    input.style.border = '1px solid white'
    input.value = ''
}
})
