const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');

btn.addEventListener('click',()=>{
    const todotext = inp.value;
    const li = document.createElement('li');

    li.innerText = todotext;

    //adding remove todo event
    li.addEventListener('click', ()=>{
        li.remove();
    })
    
    list.append(li);
    inp.value ="";

})
