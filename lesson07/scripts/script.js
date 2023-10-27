const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != ''){
        const li = document.createElement('li');
        const delButton = document.createElement('button');

        li.textContent = input.value;
        delButton.textContent = '❌';
        li.append(delButton);
        list.append(li);
        delButton.setAttribute('aria-label', `Remove ${input.value}`);
        
        delButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        })

        input.value = '';
        input.focus();
        
    } else {
        document.querySelector('#favchap').focus();
    }

});