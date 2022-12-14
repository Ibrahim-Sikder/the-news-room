const categoriesLoad = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
    .catch(error => console.log(error))
}

const displayCategories = singleCategory => {
    //  console.log(singleCategory)
    // Loader Spinner 
    
    const categoryContainer = document.getElementById('categorie-container')
       singleCategory.forEach(category => {
        // console.log(category)
        const categoryList = document.createElement('ul');
        categoryList.classList.add('d-flex');
        categoryList.innerHTML=`
        <li onclick="toggleSpinner(true), newsThumnail('${category.category_id}')" class="category">${category.category_name}</li>
        
        ` 
       
        categoryContainer.appendChild(categoryList)
        
        
       })
       
}



categoriesLoad()



//  thumnail news

const newsThumnail = (id) =>{
   
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNewsThumnail(data.data))
    .catch(error => console.log(error))
    
}


const displayNewsThumnail = (singleThumnail)  => {
    //  console.log(singleThumnail)
    
    const thumnailContainer = document.getElementById('thumnailImg')
    thumnailContainer.innerHTML='';
    singleThumnail.forEach(thumnail => {
        
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
                            <span class="icon"><i class="fa-solid fa-arrow-right" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ></i>
                            </span>

                            
                        </div>
     
                </div>
                
                </div>
              </div>
            </div>

        `
        
        thumnailContainer.appendChild(thumnailDiv)
        
        toggleSpinner(false)
        
    });
    
   

}

newsThumnail();

// Loading spinner 
const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }else{
        loaderSection.classList.add('d-none')
    }
}




// No found category 
// if(thumnail.length === 0 ){
//     singleThumnail.classList.Add=('d-none')
// }else{
//     singleThumnail.classList.remove('d-none')
// }

// display MOdal
const showDetails = (detailsId) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
    .then(res => res.json())
    .then(data => displayShowDetails(data.data[0]))
    .catch(error => console.log(error))
    
}

const displayShowDetails = details =>{
   console.log(details)
   
    const modalContainer = document.getElementById('staticBackdrop');
   
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal-dialog');
    modalDiv.classList.add('modal-lg');
    modalDiv.innerHTML= `
    <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="staticBackdropLabel">${details.title}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="card mb-3">
        <img  src="${details.thumbnail_url}" class=" modalImg card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${details.author.name}</h5>
          <p class="card-text">${details.details}</p>
          <p class="card-text">${details.details.slice(0, 200)}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
          <small>${details.total_view}</small>
          <small>${details.category_id}</small>
        </div>
     
     
    <div class="modal-footer">
    <small>${details.author.name}</small>
    <small>${details.author.published_date}</small>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
    
    
    
    `
    modalContainer.appendChild(modalDiv);
   


   
}

showDetails()

