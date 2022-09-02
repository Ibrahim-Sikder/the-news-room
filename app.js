const categoriesLoad = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
}

const displayCategories = singleCategory => {
    //  console.log(singleCategory)

    const categoryContainer = document.getElementById('categorie-container')
       singleCategory.forEach(category => {
        // console.log(category)
        const categoryList = document.createElement('ul');
        categoryList.classList.add('d-flex');
        categoryList.innerHTML=`
        <li class="category">${category.category_name}</li>
        
        `
        categoryContainer.appendChild(categoryList)

        
       })
}


categoriesLoad()





const loadThumnail = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
.then(res => res.json())
.then(data => displayThumnail(data.data))
    
}

const displayThumnail = singleThumnail  => {
    const thmnailcontainer = document.getElementById('thumnailImg')
    singleThumnail.forEach(thumnail => {
        console.log(thumnail)
        const thumnailDiv = document.createElement('div') ;
        thumnailDiv.classList.add('card');
        thumnailDiv.classList.add('mb-3');
        thumnailDiv.classList.add('p-3');
        
        thumnailDiv.innerHTML=`
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${thumnail.image_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${thumnail.title}</h5>
                  <p class="card-text">${thumnail.details.slice(0, 170)}</p>
                  <p class="card-text">${thumnail.details.slice(0, 120)}</p>
                <div class="thumnailFlex">
                        <div>
                        <img class="authorImg" src="${thumnail.author.img}">
                        <span class="authorPadding">
                        <small>${thumnail.author.name}</small><br>
                        <small class="smallPadding">${thumnail.author.published_date}</small>
                        </span>
                        
                        </div>
                        <div>
                            <span><i class="fa-solid fa-eye"></i></span>
                            <span>${thumnail.total_view}</span>
                    
                        </div>
                        <div>
                            <span> <i class="fa-regular fa-star"></i></span>
                            <span> <i class="fa-regular fa-star"></i></span>
                            <span> <i class="fa-regular fa-star"></i></span>
                            <span> <i class="fa-regular fa-star"></i></span>
                        </div>

                        <div>
                            <span class="icon"><i class="fa-solid fa-arrow-right"></i></span>
                        </div>
                    
                </div>
                
                </div>
              </div>
            </div>
          
        
        
        `
        thmnailcontainer.appendChild(thumnailDiv)

    });

}

loadThumnail();