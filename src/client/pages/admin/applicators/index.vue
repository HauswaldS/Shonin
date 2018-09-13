<template>
    <section>
        <el-col :span="24">Applicators list</el-col>
        <el-col :span="6" :key="applicator.name" v-for="applicator in applicators">
            {{applicator.name}}
        </el-col>
    </section>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        apollo: {
            applicators: {
                query: gql`{
                    applicators {
                            name,
                            email,
                            phone
                    }
                }`,
            }
        }
    }
</script>
