import React, { useRef, useState } from 'react';
import './FoodBeverage.css';

const StarRating = ({ rating }) => {
    const fullStar = '★';
    const emptyStar = '☆';
    const halfStar = '⯪';

    return (
        <div className="star-rating">
            {Array.from({ length: 5 }, (_, index) => {
                if (index < Math.floor(rating)) {
                    return <span key={index} className="star">{fullStar}</span>;
                } else if (index === Math.floor(rating) && rating % 1 !== 0) {
                    return <span key={index} className="star half">{halfStar}</span>;
                } else {
                    return <span key={index} className="star">{emptyStar}</span>;
                }
            })}
        </div>
    );
};

const FoodBeverage = () => {
    const foodRef = useRef(null);
    const beverageRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ title: '', description: '', restaurants: [] });

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCardClick = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const foodOptions = [
        {
            title: 'Nasi Kandar',
            description: 'Nasi Kandar is a Malaysian dish of steamed rice served with an array of flavorful curries, meats, seafood, and vegetables. Originating from Penang, it’s known for its rich, spicy gravies and bold flavors.',
            image: 'images/Nasi Kandar.jpg',
            restaurants: [
                {
                    name: 'Deen Maju',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/Deens+Maju+Nasi+Kandar/@5.4097318,100.32555,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac3eb3d43b56d:0x946f6008bc1c0dac!8m2!3d5.4097318!4d100.3281249!16s%2Fg%2F11b7c6fs0x?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.4,
                },
                {
                    name: 'Nasi Kandar Shariff',
                    location: 'Gelugor',
                    url: 'https://www.google.com/maps/place/Shariff+Nasi+Kandar/@5.3720526,100.2995885,16.75z/data=!4m6!3m5!1s0x304ac19f08eccec1:0x3f2f726f7fc0b409!8m2!3d5.3717645!4d100.3013492!16s%2Fg%2F11bccgkj2z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.4,
                },
                {
                    name: 'Nasi Kandar Beratur',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/Nasi+Kandar+Beratur+Original/@5.4167968,100.3369211,230m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac3a50c3547e5:0x44ebd69228225cfc!8m2!3d5.4167968!4d100.3375648!16s%2Fg%2F1hm52q023?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 3.9,
                },
            ],
        },
        {
            title: 'Hokkien Mee',
            description: 'Hokkien Mee is a stir-fried noodle dish with prawns, squid, pork, and bean sprouts, served with sambal and lime. Its rich flavor comes from a fragrant broth and wok-frying over high heat.',
            image: 'images/Hokkien mee.webp',
            restaurants: [
                {
                    name: 'One Corner Cafe',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/One+Corner+Cafe/@5.4215928,100.3230373,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac3a2c6aaa247:0x88b9bb489e7fd7e4!8m2!3d5.4215928!4d100.3256122!16s%2Fg%2F11b77qrx2q?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.0,
                },
                {
                    name: '888 Hokkien Mee',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/888+Hokkien+Mee/@5.4110553,100.3281911,922m/data=!3m1!1e3!4m6!3m5!1s0x304ac394dec9975f:0xeb45b4941686a367!8m2!3d5.4110553!4d100.330766!16s%2Fg%2F12qgfwt_q?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.1,
                },
                {
                    name: 'Granny’s Hokkien Mee',
                    location: ' Bayan Lepas',
                    url: 'https://www.google.com/maps/place/Granny\'s+Hokkien+Mee+%E5%A5%B6%E5%A5%B6%E7%A6%8F%E5%BB%BA%E9%9D%A2/@5.341947,100.2914961,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac051dbcd066d:0xda11ea0e8a171755!8m2!3d5.341947!4d100.294071!16s%2Fg%2F11b6x9_nb3?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.2,
                },
            ],
        },
        {
            title: 'Char Koay Kak',
            description: 'Char Koay Kak is a Malaysian street food made of stir-fried radish rice cakes with eggs, preserved radish, bean sprouts, and soy sauce. It’s savory, slightly spicy, and packed with wok-hei flavor.',
            image: 'images/Char Koay Kak.jpg',
            restaurants: [
                {
                    name:'Sister Yao\'s Char Koay Kak',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/Sister+Yao\'s+Char+Koay+Kak/@5.4170172,100.3264701,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac39640c0a35f:0xffe6180679dbeb98!8m2!3d5.4170172!4d100.329045!16s%2Fg%2F11c427bn7s?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.5,
                },
                {
                    name: 'Jelutong Street Market Char Koay Kak',
                    location: 'Jelutong',
                    url: 'https://www.google.com/maps/place/Char+Koay+Kak@Jalan+Penaga/@5.389719,100.3118273,461m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac1314d930b15:0x8430cb5683f14317!8m2!3d5.389719!4d100.3127381!16s%2Fg%2F11r2k3xdwj?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.3,
                },
                {
                    name: 'Chowrasta Market Hawker Centre Char Koay Kak',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/Char+koay+kak+hawker+stall/@5.4190959,100.3242669,3687m/data=!3m1!1e3!4m6!3m5!1s0x304ac39727e8c28d:0xe30c247b6b6a7c04!8m2!3d5.4179113!4d100.3322356!16s%2Fg%2F11c54258y5?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.3,
                },
            ],
        },

        {
            title: 'Pasembur',
            description:'Chendol is a popular Southeast Asian dessert made of shaved ice topped with green rice flour noodles, coconut milk, and palm sugar syrup. It often includes ingredients like red beans and sweet corn, offering a refreshing and sweet treat, especially in hot weather.',
            image: 'images/Pasembur.jpg',
            restaurants: [
                {
                    name: 'Pasembur King (Hussain)',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/Pasembur+King+(Hussain)/@5.4227823,100.3380471,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac385bec7b5d1:0x6d0f31b9b179ad0d!8m2!3d5.4227823!4d100.340622!16s%2Fg%2F12qh31f19?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.6,
                },
                {
                    name: 'GANI Famous Pasembur',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/GANI+Famous+Pasembur/@5.431546,100.314264,3686m/data=!3m1!1e3!4m10!1m2!2m1!1sGANI+Famous+Pasembur!3m6!1s0x304ac384e3089a29:0x290e89a90965e242!8m2!3d5.4230037!4d100.3404683!15sChRHQU5JIEZhbW91cyBQYXNlbWJ1cloWIhRnYW5pIGZhbW91cyBwYXNlbWJ1cpIBCmZvb2RfY291cnTgAQA!16s%2Fg%2F11c5_nbs7x?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 3.8,
                },
                {
                    name: 'Nasir Pasembor Edgecumbee Persiaran Gurney\n',
                    location: 'Gurney',
                    url: 'https://www.google.com/maps/place/Nasir+Pasembor+Edgecumbee+Persiaran+Gurney/@5.4341073,100.3124074,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac310aa1fe86d:0xfb96b8d36a45e602!8m2!3d5.4341073!4d100.3149823!16s%2Fg%2F11rn6_sgmt?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.3,
                },
            ],
        },

        {
            title: 'Banana Leaf Food',
            description: 'Banana leaf food is a traditional South Asian dining style featuring rice served on a large banana leaf with various curries, vegetables, pickles, and papadam. This vibrant presentation enhances flavors and creates a unique communal dining experience.',
            image: 'images/banana leaf food.jpg',
            restaurants: [
                {
                    name: 'D\'Sakra- Finest Indian Restaurant In The City',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/D\'Sakra-+Finest+Indian+Restaurant+In+The+City/@5.4179362,100.336744,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac3c1087a72c3:0x233b230a14ed0c83!8m2!3d5.4179362!4d100.3393189!16s%2Fg%2F11tx936jf8?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.8,
                },
                {
                    name: 'Passions of Kerala Restaurant',
                    location: 'Gelugor',
                    url: 'https://www.google.com/maps/place/Passions+Of+Kerala@Brown+Garden+,Gelugor/@5.3677622,100.2655097,7374m/data=!3m1!1e3!4m10!1m2!2m1!1sPassions+of+Kerala+Restaurant!3m6!1s0x304ac1a06971cd31:0x2a55fab230c49415!8m2!3d5.3677622!4d100.3036185!15sCh1QYXNzaW9ucyBvZiBLZXJhbGEgUmVzdGF1cmFudFofIh1wYXNzaW9ucyBvZiBrZXJhbGEgcmVzdGF1cmFudJIBEWluZGlhbl9yZXN0YXVyYW504AEA!16s%2Fg%2F1ptynp5sx?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.2,
                },
                {
                    name: 'Mamu Daun Pisang',
                    location: 'Bayan Lepas',
                    url: 'https://www.google.com/maps/place/Mamu+Daun+Pisang,+Bayan+Lepas./@5.3166933,100.2647003,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac1ff09469ce3:0x820910d7506be140!8m2!3d5.3166933!4d100.2672752!16s%2Fg%2F11vprw3fy6?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.3,
                },
            ],
        },

        {
            title: 'Koay Teow Th\'ng',
            description:'Koay Teow Th\'ng is a Malaysian noodle soup featuring flat rice noodles served in a clear, flavorful broth. It is typically garnished with ingredients like shredded chicken, prawns, and vegetables, and often accompanied by chili sauce for added spice.',
            image: 'images/Koay Teow Th\'ng.jpg',
            restaurants: [
                {
                    name: 'Ah Boy Koay Teow Th\'ng',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/Ah+Boy+Koay+Teow+Th\'ng/@5.4207012,100.3287744,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac399de626e99:0x46326521e8934332!8m2!3d5.4207012!4d100.3313493!16s%2Fg%2F12qfwx7fz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.1,
                },
                {
                    name: 'Pitt Street Koay Teow Th\'ng',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/Pitt+Street+Koay+Teow+Th\'ng+(Eel+Fish+Ball+Noodle)/@5.4144745,100.3314088,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac393e8f344ed:0x56e2ccd338ef28ec!8m2!3d5.4144745!4d100.3339837!16s%2Fg%2F11bbrfs6c5?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.2,
                },
                {
                    name: 'LUM LAI Duck Meat Koay Teow Th’ng',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/%E5%8D%97%E4%BE%86%E9%B4%A8%E8%82%89%E7%B2%BF%E6%A2%9D%E6%B9%AF+LUM+LAI+Duck+Meat+Koay+Teow+Th\'ng/@5.4073461,100.3239492,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac3699121567f:0x3235f9fd4c68310!8m2!3d5.4073461!4d100.3288201!16s%2Fg%2F11mvp4bg56?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.2,
                },
            ],
        },
    ];

    const beverageOptions = [
        {
            title: 'Cendol',
            description:'Chendol is a popular Southeast Asian dessert made of shaved ice topped with green rice flour noodles, coconut milk, and palm sugar syrup.',
            image: 'images/Cendol.webp',
            restaurants: [
                {
                    name: 'Penang Road Famous Teochew Chendol-Ice Kachang',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/Mural+-+%22Chendol+Boy%22+(Penang+Road+Famous+Teochew+Chendol-Ice+Kachang)/@5.4157732,100.3063421,14746m/data=!3m1!1e3!4m6!3m5!1s0x304ac396f053ca17:0xb71d584cc4f3348b!8m2!3d5.4171666!4d100.3306142!16s%2Fg%2F11c70j2p2z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.3,
                },
                {
                    name: 'Cafe Cendol Taman Rimba (pulau Asmara)',
                    location: 'Batu Ferringhi',
                    url: 'https://www.google.com/maps/place/Cafe+Cendol+Taman+Rimba+(pulau+Asmara)/@5.4644305,100.234111,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ae9eb72844e11:0xfede10985aaa984a!8m2!3d5.4644305!4d100.2366859!16s%2Fg%2F11j41830k5?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.8,
                },
            ],
        },
        {
            title: 'Hor Ka Sai',
            description: 'It\'s a blend of Nanyang kopi (sock brewed Robusta coffee with condensed milk) with Milo (chocolate flavoured malt powder).',
            image: 'images/Hor Ka Sai.jpg',
            restaurants: [
                {
                    name: 'Toh Soon Cafe',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/Toh+Soon+Cafe/@5.4188797,100.3273163,922m/data=!3m1!1e3!4m10!1m2!2m1!1sToh+Soon+Cafe!3m6!1s0x304ac390d778d84b:0x4a8baf420af0a21b!8m2!3d5.4188797!4d100.3320799!15sCg1Ub2ggU29vbiBDYWZlWg8iDXRvaCBzb29uIGNhZmWSARJjaGluZXNlX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11r8btkrb?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 3.7,
                },
                {
                    name: 'Joo Leong Cafe',
                    location: 'Bayan Lepas',
                    url: 'https://www.google.com/maps/place/Joo+Leong+Cafe/@5.3022,100.2737993,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304abff1504fdf29:0xf552a0e8ca6dc088!8m2!3d5.3022!4d100.2763742!16s%2Fg%2F11btz21g4b?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.0,
                },
            ],
        },
        {
            title: 'Ais Tingkap',
            description: 'Refreshing & Soothing Drinks For Scorching Hot Weather. Coconut Water Mixed with 4 Generation\'s Secret Recipe Together With Fresh Coconut Meat.',
            image: 'images/Ais tingkap.jpg',
            restaurants: [
                {
                    name: 'Ais Tingkap Penang',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/Ais+Tingkap/@5.4179211,100.321227,4384m/data=!3m1!1e3!4m6!3m5!1s0x304ac3971dd6691f:0xf659b74743d1419b!8m2!3d5.4178302!4d100.3314078!16s%2Fg%2F12qh936s7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.2,
                },
            ],
        },
    ];

    return (
        <div className="food-beverage-page">
            <header>
                <h1>Food & Beverages</h1>
                <p>From savory to sweet, our food and drink options cater to every craving!</p>
            </header>

            <div className="button-container">
                <div
                    className="scroll-button"
                    style={{ backgroundImage: `url('images/food.jpg')` }}
                    onClick={() => scrollToSection(foodRef)}
                >
                    <h2>Food</h2>
                </div>
                <div
                    className="scroll-button"
                    style={{ backgroundImage: `url('images/drink.jpg')` }}
                    onClick={() => scrollToSection(beverageRef)}
                >
                    <h2>Beverages</h2>
                </div>
            </div>

            <div className="category" ref={foodRef}>
                <div className="section-header">
                    <h2>Flavorful Selections</h2>
                    <p>Discover a variety of delicious culinaries!</p>
                </div>
                <div className="grid">
                    {foodOptions.map((food) => (
                        <div
                            className="card"
                            onClick={() => handleCardClick(food)}
                            key={food.title}
                        >
                            <img src={food.image} alt={food.title} />
                            <div className="card-description">
                                <h4>{food.title}</h4>
                                <p>{food.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="category" ref={beverageRef}>
                <div className="section-header">
                    <h2>Beverage Bliss</h2>
                    <p>Discover a refreshing range of beverages!</p>
                </div>
                <div className="grid">
                    {beverageOptions.map((beverage) => (
                        <div
                            className="card"
                            onClick={() => handleCardClick(beverage)}
                            key={beverage.title}
                        >
                            <img src={beverage.image} alt={beverage.title} />
                            <div className="card-description">
                                <h4>{beverage.title}</h4>
                                <p>{beverage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedItem.title}</h2>
                        <p>{selectedItem.description}</p>
                        <h4>Suggested Restaurants:</h4>
                        <ul className="restaurant-list">
                            {selectedItem.restaurants.map((restaurant, index) => (
                                <li key={index} className="restaurant-item">
                                    <div className="restaurant-info">
                                        <h5>{restaurant.name}</h5>
                                        <p>{restaurant.location}</p>
                                        <StarRating rating={restaurant.rating} />
                                    </div>
                                    <a
                                        href={restaurant.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="location-button"
                                    >
                                          Location 🌎
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodBeverage;
