<template>
  <div class="product-list">
    <div class="product-card" v-for="product in productList" :key="product.id">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <span class="price">₱ {{ product.price.toFixed(2) }}</span>
    </div>
  </div>
</template>
<script>


export default {
  name: 'App',
  components: {

  },

  data() {
    return {
      productList: [
        {
          "id": 1,
          "name": "Wireless Bluetooth Earbuds",
          "description": "Enjoy wireless freedom with these sleek Bluetooth earbuds. They provide crystal-clear sound quality and come with a portable charging case for on-the-go convenience.",
          "price": 49.99
        },
        {
          "id": 2,
          "name": "Smartphone Tripod Stand",
          "description": "Capture stable photos and videos with this adjustable tripod stand designed for smartphones. It features a flexible octopus-style design for versatile positioning.",
          "price": 19.99
        },
        {
          "id": 3,
          "name": "Stainless Steel Water Bottle",
          "description": "Stay hydrated in style with this durable stainless steel water bottle. It's double-walled and vacuum-sealed to keep your drinks hot or cold for hours.",
          "price": 24.99
        },
        {
          "id": 4,
          "name": "Portable Power Bank",
          "description": "Never run out of battery again with this high-capacity power bank. It's compact enough to fit in your pocket and can charge your devices multiple times on a single charge.",
          "price": 29.99
        },
        {
          "id": 5,
          "name": "Fitness Tracker Watch",
          "description": "Monitor your health and fitness goals with this sleek tracker watch. It tracks your steps, heart rate, and sleep patterns, and provides smartphone notifications.",
          "price": 69.99
        },
        {
          "id": 6,
          "name": "Digital Air Fryer",
          "description": "Cook healthier meals with this digital air fryer. It uses hot air circulation to fry your favorite foods with little to no oil, making them crispy on the outside and tender on the inside.",
          "price": 89.99
        },
        {
          "id": 7,
          "name": "Wireless Charging Pad",
          "description": "Say goodbye to tangled wires with this wireless charging pad. Simply place your Qi-enabled device on the pad to charge it quickly and conveniently.",
          "price": 39.99
        },
        {
          "id": 8,
          "name": "Noise-Canceling Headphones",
          "description": "Immerse yourself in music or podcasts with these noise-canceling headphones. They block out background noise so you can enjoy your audio with crystal-clear clarity.",
          "price": 129.99
        },
        {
          "id": 9,
          "name": "Portable Bluetooth Speaker",
          "description": "Take your music anywhere with this portable Bluetooth speaker. It's compact yet powerful, delivering rich, immersive sound that's perfect for parties or outdoor adventures.",
          "price": 59.99
        },
        {
          "id": 10,
          "name": "LED Desk Lamp",
          "description": "Illuminate your workspace with this energy-efficient LED desk lamp. It features adjustable brightness and color temperature settings to suit your preferences.",
          "price": 34.99
        },
        {
          "id": 11,
          "name": "Wireless Gaming Mouse",
          "description": "Dominate the gaming battlefield with this wireless gaming mouse. It offers precision tracking and customizable buttons for optimal performance.",
          "price": 49.99
        },
        {
          "id": 12,
          "name": "Electric Toothbrush",
          "description": "Achieve a brighter smile with this electric toothbrush. It features multiple brushing modes and a built-in timer to ensure thorough cleaning every time.",
          "price": 79.99
        },
        {
          "id": 13,
          "name": "Yoga Mat",
          "description": "Enhance your yoga practice with this high-quality yoga mat. It's non-slip and provides cushioning for your joints, making it perfect for both beginners and advanced yogis.",
          "price": 29.99
        },
        {
          "id": 14,
          "name": "Portable Blender",
          "description": "Blend your favorite smoothies and shakes on the go with this portable blender. It's rechargeable and compact, making it ideal for travel, work, or outdoor activities.",
          "price": 39.99
        },
        {
          "id": 15,
          "name": "Smart Home Security Camera",
          "description": "Keep an eye on your home from anywhere with this smart security camera. It streams HD video to your smartphone and sends alerts when it detects motion.",
          "price": 79.99
        },
        {
          "id": 16,
          "name": "Memory Foam Travel Pillow",
          "description": "Travel in comfort with this memory foam travel pillow. It provides ergonomic neck support and comes with a compact carrying case for easy transportation.",
          "price": 19.99
        },
        {
          "id": 17,
          "name": "Resistance Bands Set",
          "description": "Tone and strengthen your muscles with this resistance bands set. It includes multiple bands of varying resistance levels, plus handles and ankle straps for versatile workouts.",
          "price": 24.99
        },
        {
          "id": 18,
          "name": "UV-C Sterilizer Wand",
          "description": "Keep your belongings germ-free with this UV-C sterilizer wand. It kills 99.9% of bacteria and viruses on surfaces, making it ideal for use at home or while traveling.",
          "price": 49.99
        },
        {
          "id": 19,
          "name": "Wireless Charging Car Mount",
          "description": "Charge your phone while driving with this wireless charging car mount. It securely holds your phone in place and automatically charges it when placed on the mount.",
          "price": 39.99
        }
      ]

    }
  }
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.product-card h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.product-card p {
  font-size: 16px;
  margin-bottom: 15px;
}

.product-card .price {
  font-size: 18px;
  color: #007bff; /* or any color you prefer */
}
</style>