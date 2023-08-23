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
                    {{ title }}
                </span>
        </p>
        </div>
    </div>

</template>


<script scoped>

export default {
    name: "Breadcrumbs-component",
    props: {
        title: String,
    }
}

</script>

<style>
@import './breadcrumbs.css'
</style>