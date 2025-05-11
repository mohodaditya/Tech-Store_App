import mac from './assets/MacBook.png'
import legion from './assets/legion.png'
import hp from './assets/hp.png'
import asus from './assets/asus.png'
import dell from './assets/dell.png'
import vb from './assets/vb.png'
import ly from './assets/ly.png'
import hpx from './assets/hpx.png'

import S24 from './assets/S24.png';
import I16 from './assets/iphone16promax.png'
import P9 from './assets/P9.png'
import onePlus from './assets/1+12.png'
import v40 from './assets/v40.png'
import r14 from './assets/r14.png'
import m50 from './assets/m50.png'
import r50 from './assets/r50.png'

import boatBT from './assets/boatBT.png'
import keybord from './assets/keybord.png'
import mouse from './assets/mouse.png'
import headphone from './assets/headphone.png'
import djicam from './assets/djicam.png'
import z2 from './assets/z2.png'
import s9 from './assets/s9.png'
import anarc from './assets/anarc.png'

import './Cards.css'
import Card from "./Card";

const products = [
    {
        image: mac,
        product: 'MacBook 2024 M4 pro',
        dis: 'Apple 2024 MacBook Pro Laptop with M4 Pro chip with 14‑core CPU and 20‑core GPU...',
        link: 'https://www.apple.com/in/macbook-pro/',
        price: '169900.00 INR',
        category: 'laptops',
    },
    {
        image: anarc,
        product: 'Anarc Watch',
        dis: 'Anarc Smart Watch by Tech Burner',
        price: '6,999.00 INR',
        link: 'https://www.layers.shop/products/anarc',
        category: 'accessories',
    },
    {
        image: ly,
        product: 'Lenovo Yoga',
        dis: 'Yoga 7i 2-in-1 Intel, 35.56cms - Core Ultra 5 (Tidal Teal)',
        link: 'https://www.lenovo.com/in/en/p/laptops/yoga/yoga-2-in-1-series/lenovo-yoga-7i-2-in-1-gen-9-14-inch-intel/83dj006xin?cid=in:sem:eqqslb&gad_source=1&gclid=Cj0KCQiA1Km7BhC9ARIsAFZfEIsTSf1Pd3fQ7B-MjRBlWI81njczhn_MYuSbHrgHW05ZbHbvuJA-J_UaApCfEALw_wcB',
        price: '1,05,991 INR',
        category: 'laptops',
    },
    {
        image: S24,
        product: "Samsung S24 Ultra",
        dis: "SAMSUNG Galaxy S24 Ultra 5G (Titanium Black, 256 GB)  (12 GB RAM)",
        price: '1,11,999 INR',
        link: "https://www.samsung.com/in/smartphones/galaxy-s24-ultra/buy/",
        category: 'phones',
    },
    {
        image: dell,
        product: 'Dell Alieneare',
        dis: 'Dell Alienware x14 R2 Gaming Laptop, Intel Core i7-13620H/32GB/1TB SSD/NVIDIA RTX 4060 8GB GDDR6/14 (35.56Cms) QHD+ 165Hz, 3ms, 300nits/Win 11+MSO 21+McAfee 15 Month/Lunar Silver/2.08Kgs',
        price: '2,00,335 INR',
        link: 'https://amzn.in/d/6EpOcr2',
        category: 'laptops',
    },
    {
        image: P9,
        product: 'Google Pixel 9 pro',
        dis: 'Google Pixel 9 Pro XL (Porcelain, 256 GB)  (16 GB RAM)',
        price: '1,24,999 INR',
        link: 'https://store.google.com/in/product/pixel_9_pro',
        category: 'phones',
    },
    {
        image: boatBT,
        product: 'Boat Bluetooth Speaker ',
        dis: 'boAt Stone 193 Pro w/ 5W Signature Sound...',
        price: '1,199 INR',
        link: 'https://amzn.in/d/g0lVTk7',
        category: 'accessories',
    },
    {
        image: I16,
        product: 'iPhone 16 Pro',
        dis: 'Apple iPhone 16 Pro Max (Black Titanium, 256 GB)',
        price: '144900 INR',
        link: 'https://www.apple.com/in/shop/buy-iphone/iphone-16-pro/6.9%22-display-256gb-black-titanium',
        category: 'phones',
    },
    {
        image: legion,
        product: 'Lenovo Legion Pro 5',
        dis: 'Lenovo Legion Pro 5 Intel Core i9 14th Gen 14900HX...',
        price: '2,97,800 INR',
        link: 'https://www.lenovo.com/in/en/p/laptops/legion-laptops/legion-7-series/lenovo-legion-pro-7i-gen-9-16-inch-intel/len101g0034',
        category: 'laptops',
    },
    {
        image: r50,
        product: "Motorola Razr 50",
        dis: "Motorola razr 50 (Koala Grey, 8GB RAM, 256GB Storage) | 3.6 External AMOLED Display | 6.9 AMOLED 120Hz Display | 32MP Selfie Camera",
        price: '54,999 INR',
        link: "https://amzn.in/d/bU9zOJj",
        category: 'phones'
    },
    {
        image: s9,
        product: 'Samsung Galaxy Tab S9 Ultra',
        dis: 'Samsung Galaxy Tab S9 Ultra, S Pen in-Box, 36.99 cm (14.6 inch) Dynamic AMOLED 2X Display, RAM 12 GB, ROM 512 GB Expandable, Wi-Fi Tablet, Gray',
        price: '72,999 INR',
        link: 'https://www.samsung.com/in/tablets/galaxy-tab-s9/buy/?srsltid=AfmBOoobkBclG2n-uI3WJadn5W0APofDMK98_e9K2qo8x5TFT3cg-244',
        category: 'accessories',
    },
    {
        image: r14,
        product: "Redmi Note 14 5G",
        dis: "Redmi Note 14 5G (Mystique White, 6GB RAM 128GB Storage) | Global Debut MTK Dimensity 7025 Ultra | 2100 nits Segment Brightest 120Hz AMOLED | 50MP Sony LYT 600 OIS+EIS Triple Camera",
        price: '18,999 INR',
        link: "https://amzn.in/d/hKurbzx",
        category: 'phones',
    },
    {
        image: hp,
        product: 'HP OMEN',
        dis: 'HP OMEN Transcend 35.6 cm (14) Gaming Laptop...',
        price: '164,999 INR',
        link: 'https://www.hp.com/in-en/shop/omen-transcend-laptop-14-fb0007tx-9r291pa.html',
        category: 'laptops',
    },
    {
        image: asus,
        product: 'ROG Strix SCAR 16',
        dis: 'ROG Strix SCAR 16 (2024) G634 Intel® Core™ i9...',
        price: '294,990 INR',
        link: 'https://rog.asus.com/in/laptops/rog-strix/rog-strix-scar-16-2024/spec/',
        category: 'laptops',
    },
    {
        image: onePlus,
        product: 'OnePlus 12',
        dis: 'OnePlus 12 (12 GB RAM + 256 GB) (StorageSilky Black)',
        price: '61,789 INR',
        link: 'https://www.oneplus.com/us/oneplus-12',
        category: 'phones',
    },
    {
        image: keybord,
        product: 'MageGee 75% Mechanical Keyboard',
        dis: 'MageGee 75% Mechanical Gaming Keyboard...',
        price: '1,699 INR',
        link: 'https://amzn.in/d/fAPGvcv',
        category: 'accessories',
    },
    {
        image: mouse,
        product: 'Logitech Wireless Mouse',
        dis: 'Logitech MX Master 3S with Free Adobe Subscription...',
        price: '8,699 INR',
        link: 'https://www.amazon.in/Logitech-MX-Master-3S-Performance/dp/B0B11LJ69K',
        category: 'accessories',
    },
    {
        image: headphone,
        product: 'Logitech Wireless Gaming Headset',
        dis: 'Logitech G733 Lightspeed Wireless Gaming Headset...',
        price: '14,495 INR',
        link: 'https://amzn.in/d/iqPe9aL',
        category: 'accessories',
    },
    {
        image: djicam,
        product: 'DJI Action 2',
        dis: 'dji Action 2 Power Combo (128 GB) Sports and Action Camera  (Black, 12 MP)',
        price: '13,990 INR',
        link: 'https://www.flipkart.com/dji-action-2-power-combo-128-gb-sports-camera/p/itmc56d9987a5472?pid=SAYH33KYKFGHDBJS&marketplace=FLIPKART',
        category: 'accessories',
    },
    {
        image: z2,
        product: 'OnePlus Bullets Z2',
        dis: 'OnePlus Bullets Wireless Z2 Bluetooth  (Acoustic Red, In the Ear)',
        price: '2,290 INR',
        link: 'https://www.flipkart.com/oneplus-bullets-wireless-z2-bluetooth/p/itm37712330f2d6f?pid=ACCGF4JZHYTERVTY&lid=LSTACCGF4JZHYTERVTYFR7NCR&marketplace=FLIPKART&q=oneplus+bluetooth&store=0pm%2Ffcn%2F821%2Fa7x&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_2_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_2_3_na_na_ps&fm=search-autosuggest&iid=5a8470fe-22bf-4c58-8cc4-d0de3eba8cd3.ACCGF4JZHYTERVTY.SEARCH&ppt=sp&ppn=sp&ssid=6al6sxk08w0000001735071520690&qH=ae2384cc3a6b0d86',
        category: 'accessories',
    },
    {
        image: hpx,
        product: 'HP OmniBook X Elite',
        dis: 'HP OmniBook X Laptop, Snapdragon® X Elite X1E-78-100,14inch(35.6 cm),2.2K Touch Display,IPS,16GB LPDDR5x,1TB SSD,Next Gen Windows, Copilot +,Blue,1.34 kg,14-fe0121QU',
        price: '1,33,490 INR',
        link: 'https://amzn.in/d/7iYDmSp',
        category: 'laptops',
    },
    {
        image: vb,
        product: 'ASUS Vivobook',
        dis: 'ASUS Vivobook S 15 2022, Intel Core EVO i5-12500H 12th Gen, 15.6-inch (39.62 cms) FHD, Thin & Light Laptop (8GB/512GB SSD/Win11/Office 2021/Backlit/FingerPrint/70WHr/Black/1.80 kg), K3502ZA-KJ522WS',
        price: '61,990 INR',
        link: 'https://amzn.in/d/evxD5hc',
        category: 'laptops',
    },
    {
        image: v40,
        product: "vivo V40 5G ",
        dis: "vivo V40 5G (Lotus Purple, 512 GB)  (12 GB RAM)",
        price: '42,999 INR',
        link: "https://www.flipkart.com/vivo-v40-5g-lotus-purple-512-gb/p/itm444f2b97f5db4?pid=MOBH33ZXCZ4W4ZKT&lid=LSTMOBH33ZXCZ4W4ZKTKVSWBA&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=clp_bannerads_7_13.bannerAdCard.BANNERADS_cvb_mobile-phones-store_YPB559FU3Z93&fm=organic&iid=bb7dca31-825e-40e1-9d27-9fffe8be10da.MOBH33ZXCZ4W4ZKT.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=8wgjuvjxuo0000001735072618332",
        category: 'phones',
    },
    {
        image: m50,
        product: "Motorola Edge 50 Pro",
        dis: "Motorola Edge 50 Pro 5G with 125W Charger (Vanilla Cream, 256 GB) (12 GB RAM)",
        price: '31,969 INR',
        link: "https://amzn.in/d/6YhfxKJ",
        category: 'phones',
    },
];

function Cards({ activeTab }) {
    // Filter products based on the active tab
    const filteredProducts = activeTab === "all"
        ? products
        : products.filter(product => product.category === activeTab);

    return (
        <div className="cards-container">
            {filteredProducts.map(product => (
                <Card
                    key={product.product}
                    image={product.image}
                    product={product.product}
                    dis={product.dis}
                    price={product.price}
                    link={product.link}
                />
            ))}
        </div>
    );
}

export default Cards;