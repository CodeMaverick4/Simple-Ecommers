import CardComponent from "./Card";
const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

]
const MainContent = () => {
    return (
        <section className="container">
            <h2 className="text-center mb-5 mt-3">Music</h2>
            <div className="d-flex justify-content-center">
                <div className=" w-50 d-flex flex-wrap justify-content-center gap-4">
                    {productsArr.map(product => <CardComponent product={product} />)}
                </div>
            </div>
        </section>
    )
}
export default MainContent