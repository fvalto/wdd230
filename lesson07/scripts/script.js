const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// button.addEventListener('click', () => {
//     if (input.value != ''){
//         const li = document.createElement('li');
//         const delButton = document.createElement('button');

//         li.textContent = input.value;
//         delButton.textContent = '❌';
//         li.append(delButton);
//         list.append(li);
//         delButton.setAttribute('aria-label', `Remove ${input.value}`);
        
//         delButton.addEventListener('click', () => {
//             list.removeChild(li);
//             input.focus();
//         })

//         input.value = '';
//         input.focus();
        
//     } else {
//         document.querySelector('#favchap').focus();
//     }
// });

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value == '') {
        document.querySelector('#favchap').focus();
    } else {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
})

function displayList(item) {
    let li = document.createElement('li');
    let delButton = document.createElement('button');
    li.textContent = item;
    delButton.textContent = '❌';
    li.append(delButton);
    list.append(li);
    delButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent); //this new function will handle the local storage part
        input.focus();
    })
}

function setChapterList() {
    localStorage.setItem('BOMFavList', JSON.stringify(chaptersArray));    
}

function getChapterList() {
    return localStorage.getItem('BOMFavList');
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray.filter(item => item !== chapter);
    setChapterList();
}