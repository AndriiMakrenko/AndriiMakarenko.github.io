//var app = new Vue({
//    el: "#sunflowerall-app",
//    data: {
//        products: [
//            { id: 1, title: "Tabor Double (859)", desc: "Sunflower determinate yellow double bloom", image: 'IMAGES/sunflower_img1.jpg' },
//            { id: 2, title: "Tabor Lemon-1235", desc: "Sunflower variety with lemon-yellow blooms", image: 'IMAGES/sunflower_img2.jpg' },
//            { id: 3, title: "Tabor Orange 1252", desc: "Sunflower variety with vibrant orange blooms", image: 'IMAGES/sunflower_img3.jpg' },
//            { id: 4, title: "Maya Orange-JG-98", desc: "Sunflower variety characterized by its vibrant orange coloration", image: 'IMAGES/sunflower_img4.jpg' },
//            { id: 5, title: "Omri Supreme-JG-214", desc: "Superior sunflower variety, Omri Supreme", image: 'IMAGES/sunflower_img5.jpg' },
//            { id: 6, title: "Maya Gold Supreme-DC 135", desc: "High-yield sunflower hybrid, golden seeds", image: 'IMAGES/sunflower_img6.jpg' },
//            { id: 7, title: "Tanja-500", desc: "Sunflower variety, known for its high yield and adaptability", image: 'IMAGES/sunflower_img7.jpg' },
//            { id: 8, title: "Helianthus Flame 893", desc: "Sunflower variety is distinguished by its vibrant flame-colored petals and robust growth habit", image: 'IMAGES/sunflower_img8.jpg' },
//            { id: 9, title: "Carmel 337", desc: "Sunflower variety known for its compact size and rich, caramel-colored petals", image: 'IMAGES/sunflower_img9.jpg' }
//        ]
//    },
//     mounted:function(){
//         console.log(window.localStorage.getItem('prod'))
//     },
//     methods:{
//         addItem:function(id){
//             window.localStorage.setItem('prod',id)
//         }
//     },
//});
var app = new Vue({
    el: "#sunflowerall-app",
    data: {
        products: [
            {
                id: 1,
                title: "Tabor Double (859)",
                short_text: "Sunflower determinate yellow double bloom",
                image: 'IMAGES/sunflower_img1.jpg',
                desc: {
                    plant: [
                        "Height of plant - 130 to 180 cm.",
                        "Plant not branching.",
                        "Large leaves."
                    ],
                    Flower: [
                        "Flame petals.",
                        "Dark core.",
                        "Flower tends upward."
                    ],
                    Resistance: "Shelf life : Significantly long."
                    
                }
            },
            {
                id: 2,
                title: "Tabor Lemon-1235",
                short_text: "Sunflower variety with lemon-yellow blooms",
                image: 'IMAGES/sunflower_img2.jpg',
                desc: {
                    plant: [
                        "Height of plant: 150 to 170 cm.",
                        "Strong and upright growth habit.",
                        "Well-branched with ample foliage."
                    ],
                    Flower: [
                        "Bright lemon-yellow petals.",
                        "Dark center.",
                        "Upright facing blooms."
                    ],
                    Resistance: "Excellent shelf life"
                }
            },
            {
                id: 3,
                title: "Tabor Orange 1252",
                short_text: "Sunflower variety with vibrant orange blooms",
                image: 'IMAGES/sunflower_img3.jpg',
                desc: {
                    plant: [
                        "Height of plant: 160 to 180 cm.",
                        "Vigorous growth with sturdy stems.",
                        "Well-branched structure."
                    ],
                    Flower: [
                        "Vibrant orange petals.",
                        "Prominent dark center.",
                        "Large and showy blooms."
                    ],
                    Resistance: "Excellent shelf life, particularly in warm climates"
                }
            },
            {
                id: 4,
                title: "Maya Orange-JG-98",
                short_text: "Sunflower variety characterized by its vibrant orange coloration",
                image: 'IMAGES/sunflower_img4.jpg',
                desc: {
                    plant: [
                        "Height of plant: 150 to 170 cm.",
                        "Strong and sturdy stems.",
                        "Moderate branching."
                    ],
                    Flower: [
                        "Striking orange petals.",
                        "Dark center with contrasting hues.",
                        "Medium-sized blooms."
                    ],
                    Resistance: "Good shelf life, suitable for various climates"
                }
            },
            {
                id: 5,
                title: "Omri Supreme-JG-214",
                short_text: "Superior sunflower variety, Omri Supreme",
                image: 'IMAGES/sunflower_img5.jpg',
                desc: {
                    plant: [
                        "Height of plant: 170 to 190 cm.",
                        "Robust and vigorous growth.",
                        "Strong and thick stems."
                    ],
                    Flower: [
                        "Magnificent supreme blooms.",
                        "Bright and radiant petals.",
                        "Large and impressive size."
                    ],
                    Resistance: "Exceptional shelf life, adaptable to diverse conditions"
                }
            },
            {
                id: 6,
                title: "Maya Gold Supreme-DC 135",
                short_text: "High-yield sunflower hybrid, golden seeds",
                image: 'IMAGES/sunflower_img6.jpg',
                desc: {
                    plant: [
                        "Height of plant: 160 to 180 cm.",
                        "Strong and sturdy stems.",
                        "Moderate branching."
                    ],
                    Flower: [
                        "Radiant gold supreme blooms.",
                        "Dark center with contrasting hues.",
                        "Medium-sized blooms."
                    ],
                    Resistance: "Excellent shelf life, particularly in warm climates"
                }
            },
            {
                id: 7,
                title: "Tanja-500",
                short_text: "Sunflower variety, known for its high yield and adaptability",
                image: 'IMAGES/sunflower_img7.jpg',
                desc: {
                    plant: [
                        "Height of plant: 150 to 170 cm.",
                        "Robust and vigorous growth.",
                        "Strong stems with moderate branching."
                    ],
                    Flower: [
                        "Beautiful golden blooms.",
                        "Dark center with contrasting hues.",
                        "Medium-sized and uniform flowers."
                    ],
                    Resistance: "Good shelf life, suitable for various climates"
                }
            },
            {
                id: 8,
                title: "Helianthus Flame 893",
                short_text: "Sunflower variety is distinguished by its vibrant flame-colored petals and robust growth habit",
                image: 'IMAGES/sunflower_img8.jpg',
                desc: {
                    plant: [
                        "Height of plant: 160 to 180 cm.",
                        "Strong and sturdy stems.",
                        "Moderate branching."
                    ],
                    Flower: [
                        "Fiery flame-colored blooms.",
                        "Dark center with contrasting hues.",
                        "Medium-sized and striking flowers."
                    ],
                    Resistance: "Excellent shelf life, particularly in warm climates"
                }
            },
            {
                id: 9,
                title: "Carmel 337",
                short_text: "Sunflower variety known for its compact size and rich, caramel-colored petals",
                image: 'IMAGES/sunflower_img9.jpg',
                desc: {
                    plant: [
                        "Height of plant: 150 to 170 cm.",
                        "Robust and vigorous growth.",
                        "Strong stems with moderate branching."
                    ],
                    Flower: [
                        "Stunning carmel-colored blooms.",
                        "Dark center with contrasting hues.",
                        "Medium-sized and uniform flowers."
                    ],
                    Resistance: "Good shelf life, suitable for various climates"
                }
            }
        ],
        product: [],
        cart: [],
        contactFields: [{
            name: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            email: "",
            youAre: "",
            otherSpecify: "",
            interested: "",
            capcha: ""
        }],
        btnVisible: 0,
        cartVisible: 0,
        orderSubmitted: false,
        formVisible: 1
    },
    mounted: function () {
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods: {
        getProduct: function () {
            if (window.location.hash) {
                var id = window.location.hash.replace('#', '');
                if (this.products && this.products.length > 0) {
                    for (i in this.products) {
                        if (this.products[i] && this.products[i].id && id == this.products[i].id) this.product = this.products[i];
                    }
                }
            }
        },
        addToCart: function (id) {
            if (window.localStorage.getItem('cart')) {
                this.cart = window.localStorage.getItem('cart').split(',');
            }

            if (this.cart.indexOf(String(id)) == -1) {
                this.cart.push(id);
                window.localStorage.setItem('cart', this.cart.join());
                this.btnVisible = 1;
            }
        },
        checkInCart: function () {
            if (this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) != -1) this.btnVisible = 1;
            if (window.localStorage.getItem('cart') !== null) this.cartVisible = 1;
        },
        getCart: function () {
            if (window.localStorage.getItem('cart')) {
                this.cart = window.localStorage.getItem('cart').split(',');
                for (var value of this.cart) {
                    for (var index in this.products) {
                        if (value == this.products[index].id) {
                            this.product.push(this.products[index])
                        }
                    }
                }
            }
        },
        removeFromCart: function (id) {
            for (var index in this.product) {
                if (id == this.product[index].id) {
                    this.product.splice(index, 1);
                    this.cart.splice(index, 1)
                }
            }
            window.localStorage.setItem('cart', this.cart.join(','));
            this.getCart();
            location.reload();
        },
        makeOrder: function () {
            const sendButton = document.querySelector('.submit-button');
            sendButton.classList.add('order-accepted'); // Добавляем класс для изменения цвета
            sendButton.value = 'Замовлення прийнято'; // Изменяем текст кнопки
            this.formVisible = 0;
            this.cartVisible = 0;

            this.cart = [];
            window.localStorage.removeItem('cart');

            alert("Your order has been accepted. Press OK to refresh the page.");
        }
    },
});


