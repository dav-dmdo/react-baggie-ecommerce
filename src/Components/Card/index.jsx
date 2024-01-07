const Card = (data) => {
    const {category, images, title, price } = data.data;

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.2">{category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={title} />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{title}</span>
                <span className="text-sm font-medium">${price}</span>
            </p>
        </div>
    )
}

export { Card };