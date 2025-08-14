import "./style.css"

type TFakestore = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const inputTitle = document.getElementById("inputTitle") as HTMLInputElement
// const searchByTitle = document.getElementById("searchByTitle") as HTMLButtonElement

const selectCategory = document.getElementById("sortBy") as HTMLSelectElement

const eletronicsBtn = document.getElementById("eletronicsBtn") as HTMLButtonElement
const jeweleryBtn = document.getElementById("jeweleryBtn") as HTMLButtonElement
const menClothingBtn = document.getElementById("menClothingBtn") as HTMLButtonElement
const womenClothingBtn = document.getElementById("womenClothingBtn") as HTMLButtonElement

const shopArticles = document.getElementById("shopArticles") as HTMLDivElement

// url: https://fakestoreapi.com/products

const URL_FAKESTORE_API = "https://fakestoreapi.com/products"

function createFakestoreProductElements(fakestoreProduct: TFakestore): HTMLDivElement {
  const productDiv = document.createElement("div")
  productDiv.className = "productDiv"

  const productImg = document.createElement("img")
  productImg.className = "productImg"

  const productTitle = document.createElement("h4")
  productTitle.className = "productTitle"

  const productPrice = document.createElement("p")
  productPrice.className = "productPrice"

  const productButton = document.createElement("button")
  productButton.className = "productButton"

  productImg.src = fakestoreProduct.image
  productTitle.textContent = fakestoreProduct.title
  productPrice.textContent = `$ ${fakestoreProduct.price}`
  productButton.textContent = `Add to cart`

  // shopArticles.appendChild(productDiv)

  productDiv.appendChild(productImg)
  productDiv.appendChild(productTitle)
  productDiv.appendChild(productPrice)
  productDiv.appendChild(productButton)

  return productDiv
}

fetch(URL_FAKESTORE_API)
  .then((response: Response) => {
    // console.log(response)
    return response.json()
  })
  .then((fakestore: TFakestore[]) => {
    fakestore.forEach((fakestoreProduct: TFakestore) => {
      // console.log(fakestore)
      console.log(fakestoreProduct)
      const showingProductElements = createFakestoreProductElements(fakestoreProduct)
      shopArticles.appendChild(showingProductElements)
    })

    eletronicsBtn.addEventListener("click", () => {
      // ! innerHTML vorher leeren nicht vergessen!!!!
      shopArticles.innerHTML = ""
      fakestore.forEach((fakestoreProduct: TFakestore) => {
        if (fakestoreProduct.category === "electronics") {
          const showingProductElements = createFakestoreProductElements(fakestoreProduct)
          shopArticles.appendChild(showingProductElements)
        }
      })
    })

    jeweleryBtn.addEventListener("click", () => {
      shopArticles.innerHTML = ""
      fakestore.forEach((fakestoreProduct: TFakestore) => {
        if (fakestoreProduct.category === "jewelery") {
          const showingProductElements = createFakestoreProductElements(fakestoreProduct)
          shopArticles.appendChild(showingProductElements)
        }
      })
    })

    womenClothingBtn.addEventListener("click", () => {
      shopArticles.innerHTML = ""
      fakestore.forEach((fakestoreProduct: TFakestore) => {
        if (fakestoreProduct.category === "women's clothing") {
          const showingProductElements = createFakestoreProductElements(fakestoreProduct)
          shopArticles.appendChild(showingProductElements)
        }
      })
    })

    menClothingBtn.addEventListener("click", () => {
      shopArticles.innerHTML = ""
      fakestore.forEach((fakestoreProduct: TFakestore) => {
        if (fakestoreProduct.category === "men's clothing") {
          const showingProductElements = createFakestoreProductElements(fakestoreProduct)
          shopArticles.appendChild(showingProductElements)
        }
      })
    })
    // ! (fakestore: TFakestore[]) = array von objekten -> sort geht
    selectCategory.addEventListener("change", () => {
      shopArticles.innerHTML = ""

      const copyFakestoreArray = [...fakestore]

      copyFakestoreArray.forEach((fakestoreProduct: TFakestore) => {
        console.log(fakestoreProduct)
        if (selectCategory.value === "price") {
          // console.log(selectCategory)
          // console.log(selectCategory.value)
          copyFakestoreArray.sort((a, b) => b.price - a.price)
        } else if (selectCategory.value === "rating") {
          copyFakestoreArray.sort((a, b) => b.rating.rate - a.rating.rate)
        }
        const showingProductElements = createFakestoreProductElements(fakestoreProduct)
        shopArticles.appendChild(showingProductElements)
      })
    })

    // Suchfunktion von Farid : )
    // searchInput.addEventListener("input", () => {
    //   const searchValue = searchInput.value.trim().toLowerCase();
    //   const filteredProducts = products.filter((product) =>
    //     product.title.toLowerCase().includes(searchValue)
    //   );
    //   showProducts(filteredProducts);
    // });

    inputTitle.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        shopArticles.innerHTML = ""

        const inputTitleValue = inputTitle.value.trim().toLowerCase()
        const filteredProducts = fakestore.filter((product) => product.title.toLowerCase().includes(inputTitleValue))
        // const showingProductElements = createFakestoreProductElements(filteredProducts)
        // shopArticles.appendChild(showingProductElements)
        console.log(inputTitleValue)
        console.log(filteredProducts)

        filteredProducts.forEach((fakestoreProduct: TFakestore) => {
          const showingProductElements = createFakestoreProductElements(fakestoreProduct)
          shopArticles.appendChild(showingProductElements)
        })

        event.preventDefault()
      }
    })

    // searchByTitle.addEventListener("click", () => {
    //   shopArticles.innerHTML = ""

    //   const inputTitleValue = inputTitle.value

    //   fakestore.forEach((fakestoreProduct: TFakestore) => {
    //     if (fakestoreProduct.title.toLowerCase() === inputTitleValue) {
    //       const showingProductElements = createFakestoreProductElements(fakestoreProduct)
    //       shopArticles.appendChild(showingProductElements)
    //     } else {
    //       shopArticles.innerHTML = "No such product found"
    //     }
    //   })
    // })
  })
//
//
//
//
//
//
//
//
// fetch(URL_FAKESTORE_API)
//   .then((response: Response) => {
//     // console.log(response)
//     return response.json()
//   })
//   .then((fakestore: TFakestore[]) => {
//     fakestore.forEach((fakestoreProduct: TFakestore) => {
//       // console.log(fakestore)
//       // console.log(fakestoreProduct)

//       const productDiv = document.createElement("div")
//       productDiv.className = "productDiv"

//       const productImg = document.createElement("img")
//       productImg.className = "productImg"

//       const productTitle = document.createElement("h4")
//       productTitle.className = "productTitle"

//       const productPrice = document.createElement("p")
//       productPrice.className = "productPrice"

//       const productButton = document.createElement("button")
//       productButton.className = "productButton"

//       productImg.src = fakestoreProduct.image
//       productTitle.textContent = fakestoreProduct.title
//       productPrice.textContent = `$ ${fakestoreProduct.price}`
//       productButton.textContent = `Add to cart`

//       shopArticles.appendChild(productDiv)

//       productDiv.appendChild(productImg)
//       productDiv.appendChild(productTitle)
//       productDiv.appendChild(productPrice)
//       productDiv.appendChild(productButton)
//     })

//     searchByTitle.addEventListener("click", () => {
//       // shopArticles.style.background = "none"
//       shopArticles.innerHTML = ""
//       const inputTitleValue = inputTitle.value

//       fakestore.forEach((fakestoreProduct: TFakestore) => {
//         // console.log("title", fakestoreProduct.title)
//         if (fakestoreProduct.title.toLowerCase() === inputTitleValue) {
//         }
//       })
//     })
//   })
