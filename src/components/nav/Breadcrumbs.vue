<template>

    <div class="row align-items-center">
        <div class="col-12 text-uppercase breadcrumbs">
            <p>
                <router-link 
                to="/" 
                class="breadcrumbLink">
                home
                </router-link>
                &#47;
                <span>
                    product details
                </span>
        </p>
        </div>
    </div>

</template>


<script scoped>

export default {
    name: "Breadcrumbs-component",
}

</script>

<style>
@import './breadcrumbs.css'
</style>