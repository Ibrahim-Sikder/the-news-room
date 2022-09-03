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
        <li onclick="newsThumnail(data.category_id)" class="category">${category.category_name}</li>
        
        `
        categoryContainer.appendChild(categoryList)

        
       })
}


categoriesLoad()





const newsThumnail = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
.then(res => res.json())
.then(data => displayNewsThumnail(data.data))
.catch(error => console.log(error));
    
}

const displayNewsThumnail = singleThumnail  => {
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
                            <span class="icon"><i class="fa-solid fa-arrow-right"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                            </span>
                            
                            
                        </div>
                        
                    
                </div>
                
                </div>
              </div>
            </div>
          
        
        
        `
        thmnailcontainer.appendChild(thumnailDiv)
       
        
    });
   

}





newsThumnail('a');

// display MOdal
const modalPlay = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
.then(res => res.json())
.then(data => displayModal(data.data))

    
}

const displayModal = modal =>{
   
    
    const modalContainer = document.getElementById('staticBackdrop');
   modal.forEach(singleModal =>{
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal-dialog');
    modalDiv.classList.add('modal-lg');
    modalDiv.innerHTML= `
    <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="card mb-3">
        <img  src="${singleModal.thumbnail_url}" class=" modalImg card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${singleModal.title}</h5>
          <p class="card-text">${singleModal.details}</p>
          <p class="card-text">${singleModal.details.slice(0, 200)}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

          </div>
          <small>${singleModal.total_view}</small>
          <small>${singleModal.category_id}</small>
        </div>
     
     
    <div class="modal-footer">
    <small>${singleModal.author.name}</small>
    <small>${singleModal.author.published_date}</small>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

    </div>
  </div>
    
    
    
    `
    modalContainer.appendChild(modalDiv);
   

    singleModal.slice(0, 1)
   })
   

   

}




modalPlay()