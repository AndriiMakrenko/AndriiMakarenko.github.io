var app = new Vue({
    el: "#sunflowerall-app",
    data: {
        products: [
            { id: 1, title: "Tabor Double (859)", desc: "Sunflower determinate yellow double bloom", image: 'IMAGES/sunflower_img1.jpg' },
            { id: 2, title: "Tabor Lemon-1235", desc: "Sunflower variety with lemon-yellow blooms", image: 'IMAGES/sunflower_img2.jpg' },
            { id: 3, title: "Tabor Orange 1252", desc: "Sunflower variety with vibrant orange blooms", image: 'IMAGES/sunflower_img3.jpg' },
            { id: 4, title: "Maya Orange-JG-98", desc: "Sunflower variety characterized by its vibrant orange coloration", image: 'IMAGES/sunflower_img4.jpg' },
            { id: 5, title: "Omri Supreme-JG-214", desc: "Superior sunflower variety, Omri Supreme", image: 'IMAGES/sunflower_img5.jpg' },
            { id: 6, title: "Maya Gold Supreme-DC 135", desc: "High-yield sunflower hybrid, golden seeds.", image: 'IMAGES/sunflower_img6.jpg' },
            { id: 7, title: "Tanja-500", desc: "Sunflower variety, known for its high yield and adaptability", image: 'IMAGES/sunflower_img7.jpg' },
            { id: 8, title: "Helianthus Flame 893", desc: "Sunflower variety is distinguished by its vibrant flame-colored petals and robust growth habit", image: 'IMAGES/sunflower_img8.jpg' },
            { id: 9, title: "Carmel 337", desc: "Sunflower variety known for its compact size and rich, caramel-colored petals", image: 'IMAGES/sunflower_img9.jpg' }
        ]
    },
     mounted:function(){
         console.log(window.localStorage.getItem('prod'))
     },
     methods:{
         addItem:function(id){
             window.localStorage.setItem('prod',id)
         }
     },
});