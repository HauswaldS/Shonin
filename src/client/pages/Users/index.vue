<template>
    <section>
        <el-col :span="24">Current user</el-col>
    </section>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        apollo: {
            user: {
                query: gql`{
                    user {
                        id,
                        auth0_id,
                        name,
                        email
                    }
                }`,
                variables: {
                    id: 1
                }
            }
        }
    }
</script>
