let serachForm = document.getElementById('searchForm')
let pageLinks = document.getElementsByClassName('page-link')
// Get search Form and page links
if (searchForm) {
  for (let i = 0; pageLinks.length > i; i++) {
      pageLinks[i].addEventListener('click', function(e){
          e.preventDefault()
          // get the data attribute
          let page = this.dataset.page
          // add hidden search input to form
          console.log('PAGE:', page)
          searchForm.innerHTML += `<input value=${page} name="page" hidden/>`

          //submit form
          searchForm.submit()

      })
  }
}
