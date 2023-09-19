<template>
    <div class="row g-0 mb-4">
        <div class="col-auto sizes align-self-center" :class="{'selected': isSelected == size.size}" v-for="(size, index) in sizes" :key="'s' + index" @click="handleClickSizes" :id="size.id">
        {{size.size}}
    </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: "ProductSize-component",
    data() {
        return {
            sizes: [
                {size:7 ,id: 1},
                {size:7.5, id: 2},
                {size:8, id: 3},
                {size:8.5, id: 4},
                {size:9, id: 5},
                {size:9.5, id: 6},
                {size:10, id: 7},
                {size:10.5, id: 8},
                {size:11, id: 9},
                {size:11.5, id: 10},
                {size:12, id: 11},
                {size:12.5, id: 12},
                {size:13, id: 13},
                {size:13.5, id: 14},
                {size:14, id: 15},
            ],

            isSelected: 7
        }
    },

    computed: {
        ...mapGetters([
            'getSize'
        ]),
    },

    methods: {
        handleClickSizes(e) {
            console.log("size of", typeof e.target.innerText);
            this.isSelected = e.target.innerText;
            this.$emit('setSize', e.target.innerText);
        }
    }

}

</script>

<style scoped>
.sizesContainer {
    display: flex;
}

.sizes {
    width: 45px;
    height: 45px;
    background-color: #ccc;
    border-radius: 2px;
    margin-bottom: 5px;
    margin-right: 5px;
    line-height: 45px;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    cursor: pointer;
    transition: all 250ms ease-in;
}

.sizes:hover {
    background-color: #616161;
    color: white;
}

.selected {
    background-color: #616161;
    color: white;
}


</style>