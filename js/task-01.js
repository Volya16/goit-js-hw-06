const categoriesList = document.querySelector('#categories');
const categories = document.querySelectorAll('.item')

console.log("Number of categories:", categories.length);

categories.forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent;
    const elements = category.querySelectorAll("li").length;

    console.log("Category:", categoryTitle);
    console.log("Elements:", elements);
});