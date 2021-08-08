<template>
    <div class="login-container">
        <v-form v-model="loginForm" class="login-form" >
            <div class="title-container">
                <h3 class="title1">OBS Login</h3>
            </div>
            <v-text-field v-model="loginForm.username" label="Username" Required/>
            <v-text-field v-model="loginForm.password" label="Password" Required/>
            <v-btn color="success" rounded width="200" style=" display:block; margin: 20px auto" v-on:click="login">Login</v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            loginForm: {
                username:'',
                password:'',
            },
            responseResult:[]
        }
    },
    methods:{
        login() {
            let _this = this
            this.$axios
                .get('https://qc5wyz.fn.thelarkcloud.com/loginVerify',{
                    param: {
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
                .then((response) => {
                    console.log(response);
                    if(response.data.password === _this.loginForm.password){
                        this.$router.replace({name: 'Home'})
                    }
                })
        }
    }
}
</script>

<style lang="scss" scoped>
    $bg:#2d3a4b;
    $dark-gary:#889aa4;
    $light-gray:#eee;
    .login-container{
        min-height: 100%;
        width: 100%;
        background-color: $light-gray;
        overflow: hidden;

        .login-form{
            position: relative;
            width: 375px;
            max-height: 100%;
            padding: 160px 35px 0;
            margin: 0 auto;
            overflow: hidden;

            .title-container{
                position: relative;

                .title1{
                    font-size: 1.7rem;
                    color: $bg;
                    margin: 10px auto 40px auto;
                    text-align: center;
                    font-weight: bold;
                }
            }
        }





    }

</style>