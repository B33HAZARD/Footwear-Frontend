<script>

import { Icon } from '@iconify/vue2';

export default {
    name: 'Footer-component',
	components: {
		Icon,
	},
    data() {
        return {
            customerCare: [
                {id: 20, text: "contact"},
                {id: 21, text: "return/exchange"},
                {id: 22, text: "gift voucher"},
                {id: 23, text: "whishlist"},
                {id: 24, text: "special"},
                {id: 25, text: "customer services"},
                {id: 26, text: "site maps"},
            ],
            information: [
                {id: 30, text: "about us"},
                {id: 31, text: "deliver information"},
                {id: 32, text: "privacy policy"},
                {id: 33, text: "support"},
                {id: 34, text: "order tracking"},
            ],
            news: [
                {id: 40, text: "blog"},
                {id: 41, text: "press"},
                {id: 42, text: "exhibitions"},
            ],
            contact: [
                {id:50, text: "291 SOUTH 21TH STREET, SUITE 721 NEW YORK NY 10016"},
                {id:51, text: "+ 1235 2355 98"},
                {id:52, text: "INFO@YOURSITE.COM"},
                {id:53, text: "yoursite.com"},

            ],
        }
    }
}

</script>


<template>
    <div>
        <footer class="footerContainer">
            <div class="customContainer">
                <div class="footerWrapper">
                        <div class="footerSection ">
                            <h4 class="footerHeading">about footwear</h4>
                            <p class="footerDescription">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                            <span class="footerIcons">
                                <Icon icon="ion:logo-twitter" />
                            </span>
                            <span class="footerIcons">
                                <Icon icon="ri:facebook-fill" />
                            </span>
                            <span class="footerIcons">
                                <Icon icon="mdi:linkedin" />
                            </span>
                            <span class="footerIcons">
                                <Icon icon="icon-park-outline:dribble" />
                            </span>
                        </div>
                        <div class="footerSection customerCare">
                            <h3 class="footerHeading">customer care</h3>
                        <ul class="footerNav">
                            <li v-for="item in customerCare" :key="item.id" :id="'ft' + item.id">
                            {{ item.text }}
                            </li>
                        </ul>
                    </div>
                    <div class="footerSection mt-4 mt-sm-0">
                        <h4 class="footerHeading">information</h4>
                        <ul class="footerNav">
                            <li v-for="item in information" :key="item.id" :id="'ft' + item.id">
                            {{ item.text }}
                            </li>
                        </ul>
                    </div>
                    <div class="footerSection mt-4 mt-md-0">
                        <h4 class="footerHeading">news</h4>
                        <ul class="footerNav">
                            <li v-for="item in news" :key="item.id" :id="'ft' + item.id">
                            {{ item.text }}
                            </li>
                        </ul>
                    </div>
                    <address class="footerSection mt-4 mt-md-0">
                        <h4 class="footerHeading">contact information</h4>
                        <ul class="footerNav">
                            <li v-for="item in contact" :key="item.id" :id="'ft' + item.id">
                            {{ item.text }}
                            </li>
                        </ul>
                    </address>
                </div>
            </div>
        </footer>
    </div>
</template>


<style scoped>
@import './footer.css'
</style>