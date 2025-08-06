export const productsMock = [
{
    id: 1,
    title: "Bolso de mano negro" ,
    price: 30.000,
    descrption: "bolso de mano, tamaño pequeño de color negro",
    imageUrl: //www.claroshop.com/producto/16903586/bolso-de-mano-para-mujer-bandolera-moda-hombro-tote-elegante-casual#modalSliderProduct
    stock: 89 ,
    category: "Bolsos Pequeños",
},
{
    id: 2,
    title: "Bolso de mano rosa" ,
    price: 30.000,
    descrption: "bolso de mano, tamaño pequeño de color rosa",
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG
    stock: 55,
    category: "Bolsos Pequeños",
},
{
    id: 3,
    title: "Bolso de mano azul" ,
    price: 30.000,
    descrption: "bolso de mano, tamaño pequeño de color azul",
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock: 76,
    category: "Bolsos Pequeños",
},
{
    id: 4,
    title: "Bolso de mano gris" ,
    price: 30.000,
    descrption:"bolso de mano, tamaño pequeño de color gris" ,
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock:98 ,
    category: "Bolsos Pequeños",
},
{
    id: 5,
    title: "Bolso de mano negro con brillos",
    price: 30.000,
    descrption: "bolso de mano, tamaño pequeño de color negro con brillos",
    imageUrl:"src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG" ,
    stock: 56,
    category: "Bolsos Pequeños",
},
{
    id: 6,
    title: "cartera facultad negra",
    price: 40.000,
    descrption: "Cartera ultra comoda para el dia a dia, perfecta para los dias de estudio donde tenes que llevar muchas cosas. ",
    imageUrl:"src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock: 5,
    category: "Bolso facultad ",
},
{
    id: 7,
    title: "cartera facultad gris ",
    price: 40.000,
    descrption: " Cartera ultra comoda para el dia a dia, perfecta para los dias de estudio donde tenes que llevar muchas cosas. ",
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock: 32,
    category: "Bolso facultad ",
},
{
    id: 8,
    title: "cartera facultad rosa ",
    price: 40.000,
    descrption: " Cartera ultra comoda para el dia a dia, perfecta para los dias de estudio donde tenes que llevar muchas cosas. ",
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock: 87,
    category: " Bolso facultad",
},
{
    id: 9,
    title: "cartera facultad blanca ",
    price: 40.000,
    descrption: "Cartera ultra comoda para el dia a dia, perfecta para los dias de estudio donde tenes que llevar muchas cosas.  ",
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock: 88,
    category: "Bolso facultad ",
},
{
    id: 10,
    title: "cartera facultad roja ",
    price: 40.000,
    descrption: "Cartera ultra comoda para el dia a dia, perfecta para los dias de estudio donde tenes que llevar muchas cosas.  ",
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock: 66,
    category: "Bolso facultad ",
},
{
    id: 11,
    title: "Mochila negra ",
    price: 35.000,
    descrption: "Mochila ideal para el uso diario ",
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock: 76,
    category: " Mochila",
},
{
    id: 12,
    title: "Mochila gris ",
    price: 35.000,
    descrption: " Mochila ideal para el uso diario",
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock: 54,
    category: "Mochila ",
},
{
    id: 13,
    title: "Mochila rosa ",
    price: 35.000,
    descrption: " Mochila ideal para el uso diario",
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock:98 ,
    category: " Mochila",
},
{
    id: 14,
    title: "Mochila azul ",
    price: 35.000,
    descrption: " Mochila ideal para el uso diario",
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock: 45,
    category: " Mochila",
},
{
    id: 15,
    title: "Mochila blanca ",
    price: 35.00,
    descrption: " Mochila ideal para el uso diario",
    imageUrl: "src/assets/img/21FEB529-3BC8-4DD6-A1AC-39F38683CD97.PNG",
    stock: 67,
    category: "Mochila ",
},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === id));
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            esolve(products.filter((prod) => prod.categoria === categoryId));
        }, 1000);
    });
};