<template>
    <div>
        RUN
    </div>
</template>

<script>
export default {
    computed:{
    shouldShowSidebar(){
        return this.$route.meta.sidebar!==false;
    }
}
}
</script>