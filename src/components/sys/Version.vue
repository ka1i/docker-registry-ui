<template>
    <div>
        <div class="n-layout-page-header">
            <n-card :bordered="false" title="关于">
                {{ pkg.name }}, Just like name.
            </n-card>
        </div>
        <n-card :bordered="false" title="项目信息" class="mt-4 proCard" size="small" :segmented="{ content: true }">
            <n-descriptions bordered label-placement="left" class="py-2">
                <n-descriptions-item label="版本">
                    <n-tag type="info"> {{ pkg.version }}@{{ gitTags }} </n-tag>
                </n-descriptions-item>
            </n-descriptions>
        </n-card>

        <n-card :bordered="false" title="生产环境依赖" class="mt-4 proCard" size="small" :segmented="{ content: true }">
            <n-descriptions bordered label-placement="left" class="py-2">
                <n-descriptions-item v-for="item in schema" :key="item.field" :label="item.field">
                    {{ item.label }}
                </n-descriptions-item>
            </n-descriptions>
        </n-card>

        <n-card :bordered="false" title="开发环境依赖" class="mt-4 proCard" size="small" :segmented="{ content: true }">
            <n-descriptions bordered label-placement="left" class="py-2">
                <n-descriptions-item v-for="item in     devSchema" :key="item.field" :label="item.field">
                    {{ item.label }}
                </n-descriptions-item>
            </n-descriptions>
        </n-card>


    </div>
</template>


<script setup lang="ts">
export interface schemaItem {
    field: string;
    label: string;
}

const { pkg, gitTags } = __APP_INFO__;
const { dependencies, devDependencies } = pkg;

const schema: schemaItem[] = [];
const devSchema: schemaItem[] = [];

Object.keys(dependencies).forEach((key) => {
    schema.push({ field: key, label: dependencies[key] });
});

Object.keys(devDependencies).forEach((key) => {
    devSchema.push({ field: key, label: devDependencies[key] });
});
</script>