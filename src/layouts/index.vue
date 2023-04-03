<template>
    <div position="relative">
        <n-layout position="absolute" style="transition: all 0.3s;" has-sider>
            <n-layout position="absolute" style="transition: all 0.3s;">
                <!-- header区域-->
                <!-- <Header /> -->
                <!-- 页面内容区域-->
                <n-layout-content class="layout-content">
                    <div>
                        <router-view />
                    </div>
                </n-layout-content>
            </n-layout>
        </n-layout>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
    