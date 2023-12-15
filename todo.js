const formTarefa = document.querySelector('#form-lista');
let lista = [];

const ulTodo = document.querySelector('#todo-list');


formTarefa.addEventListener('submit', function(evento){
    evento.preventDefault();

    let tarefaAdd = document.querySelector('#caixa-tarefa');

    let validado = validarTarefa(tarefaAdd);

    if (validado == true){

       
    }


                let tasks = {
            id:lista.length + 1,
            tarefa:tarefaAdd.value,
        };  
    
        lista.push(tasks);

    
        let li1 = document.createElement('li');
        li1.innerHTML = tasks.tarefa;
    
        let btn1 = document.createElement('button');
        btn1.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn1.addEventListener('click', function(){
    
            
            li1.style.color = 'green';
    
        })
    
    
        let btnTrash = document.createElement('button');
        btnTrash.innerHTML = '<i class="fa-solid fa-trash"></i>';
        btnTrash.id = lista.length;
    
        btnTrash.addEventListener('click', function(b){
    
            let botao = b.target;
          
            let id = btnTrash.id;
           
            for(let i = 0; i < lista.length; i++){
                if(id == lista[i].id){
                    lista.splice(i,1)
                }
            }
            
            let divRemover = document.getElementById('div'+id);
            ulTodo.removeChild(divRemover);
        })
        
       
    
        let divAdd = document.createElement('div');
        divAdd.id = 'div'+lista.length;
        divAdd.append(li1);
        divAdd.append(btn1);
        divAdd.append(btnTrash);
    
        ulTodo.appendChild(divAdd);



    
})

function validarTarefa(tarefaAdd){
    if(tarefaAdd.value == ""){
        alert('Digite uma tarefa!');
        return false;
    }
    return true;
}
