<script>
import {Icon} from "@iconify/vue2";
import dropdown from "bootstrap/js/src/dropdown";

export default {
  name: "Header-component",
  computed: {
    dropdown() {
      return dropdown
    }
  },
  components: {
    Icon,
  },
  data() {
    return {
      navItems:  [
        {id:1, text:"Home", link:"/"},
        {id:2, text:"Men", link:"/", dropdown: [
            {id: 12, text: "Product Detail", link:"/product"},
            {id: 13, text: "Shopping Cart",link:"/product"},
            {id: 14, text: "Checkout",link:"/product"},
            {id: 15, text: "Order Complete", link:"/product"},
            {id: 16, text: "Wishlist", link:"/product"},
          ]},
        {id:3, text:"Women", link:"/"},
        {id:4, text:"About", link:"/"},
        {id:5, text:"Contact", link:"/" }
      ],
      navCarItems: 0,
      showMenu: false,
    }
  },
  methods: {
    handleShowMenu: function() {
      this.showMenu = !this.showMenu;
      console.log("clicked!")
    },
  },
}
</script>

<template>
  <div>
    <div class="navBackDrop"></div>
  <nav class="customContainer">
    <div class="row g-0 align-items-center justify-content-evenly justify-content-md-between">
      <div class="logo col-5 col-md">
        <h1>FootWear</h1>
      </div>
      <div class="searchBox col-auto">
        <input type="text" name="search"  placeholder="Search"  />
        <button class="searchBtn">
        <Icon icon="ion:search" />
        </button>
      </div>
      <div class="navHamburger col text-end">
        <span v-on:click="handleShowMenu">
          <Icon icon="ion:reorder-four-outline" />
        </span>
      </div>
    </div>
    <!--   Menu  -->
    <div class="navMenuWrapper">
    <div class="navMenu"
         v-bind:class="{'navMenuOpen' : showMenu}">
      <div class="col">
        <ul class="navList">
          <li v-for="item in navItems" :key="item.id" class="navItem col-auto position-relative">
            <router-link :to="item.link" class="navLink" >{{item.text}}</router-link>

            <ul v-if="item.dropdown" class="navList subNavList">
              <li v-for="ditem in item.dropdown" :key="ditem.id" class="navItem subNavItem">
                <router-link :to="ditem.link + '/' + ditem.id" class="subNavLink"  >{{ditem.text}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-auto">
        <ul class="navList cartItems">
          <li class="navItem navCart">
            <span class="navCartIcon"><Icon icon="ion:cart-outline" /></span>
            cart [{{navCarItems}}]
          </li>
        </ul>
      </div>
    </div>
    </div>
  </nav>
</div>
</template>

<style scoped>
@import './header.css';
</style>