const categoriesLoad = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
}

const displayCategories = singleCategory => {
    //  console.log(singleCategory)
    const categoryContainer = document.getElementById('categorie-container')
       singleCategory.forEach(category => {
        const categoryList = document.createElement('ul');
        categoryList.classList.add('d-flex');
        categoryList.innerHTML=`
        <li class="category">${category.category_name}</li>
        
        
        `
        categoryContainer.appendChild(categoryList)

        
       })
}


categoriesLoad()