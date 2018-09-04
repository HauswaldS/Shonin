<template>
    <section>
        <el-col :span="24">Current user</el-col>
        <el-col :span="6">
            <el-button type="primary" @click="createUser">Create User</el-button>
        </el-col>
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
        },
        methods: {
            createUser() {
                const newUser = {
                    auth0_id:1,
                    name:"Hauswald",
                    email: "lbaxel95@gmail.com"
                }
                this.$apollo.mutate({
                    mutation:   gql`mutation addUserMutation($auth0_id: Int!, $name: String!, $email: String!) {
                        AddUser(auth0_id: $auth0_id, name: $name, email: $email) {
                            auth0_id
                            name
                            email
                            }
                        }`,
                    variables: {
                        ...newUser
                    },
                    update: (store, data) => {
                        console.log("sup")
                        console.log(store)
                        console.log(data)
                    },
                    optimisticResponse: {
                        __typename: 'Mutation',
                        addTag: {
                            __typename: 'User',
                            id: -1,
                            label: newUser,
                        }
                    }
                }).then(res => {
                    console.log(res)
                }, err => console.log(err))
            }
            }

    }
</script>
