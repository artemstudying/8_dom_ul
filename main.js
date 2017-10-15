let arr = [1,2, [1.1,1.2,1.3] ,3];

function createList(brr){
    let ul = document.createElement('ul');
    

    for (let i = 0; i < brr.length; i++) {
        if(Array.isArray(brr[i])){
           li.appendChild(createList(brr[i]));
        } else{
            let li = document.createElement('li');
            li.innerHTML = brr[i];
            ul.appendChild(li);
        }
    };
    return (ul);
};

let div = document.getElementById('list');
div.appendChild(createList(arr));




