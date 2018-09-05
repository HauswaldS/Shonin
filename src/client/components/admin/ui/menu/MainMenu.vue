<template>
    <el-menu default-active="2" :collapse="isCollapse" id="menu">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">Settings</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1" @click="logout">Logout</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="fas fa-box"></i>
                <span slot="title">Elements</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="2-1" @click="$router.go('/admin/applicators')">
                    Applicateurs
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
    import authService from '../../../../utils/auth_service';

    export default {
        data() {
            return {
                isCollapse: false,

                menuItems: [
                    {}
                ]
            };
        },
        methods: {
            logout() {
                authService.logout();
            }
        }
    };
</script>

<style scoped>
    #menu {
        height: 100%;
    }
</style>
