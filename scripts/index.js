const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories));


};
const displayCategories=(categories)=>{
    for( let categ of categories){
        const categoryBtn =document.createElement('div');
        categoryBtn.innerHTML=`
         <button class="btn btn-sm hover:bg-red-500 hover:text-white">
        ${categ.category}
        </button>
        `
        const catBtnContainer =document.getElementById('cat-btn-container');
        catBtnContainer.appendChild(categoryBtn);
    }


}

loadCategories();