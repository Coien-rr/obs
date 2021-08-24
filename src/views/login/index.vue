<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-g">
        <div class="max-w-md w-full space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                <h2 class="mt-6 text-center text-3xl font-extralight text-gray-900">
                    Sign in to your account
                </h2>
                <p class="mt-6 text-center text-sm text-gray-600">
                    Or
                    {{' '}}
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                        start your 14-day free trial
                    </a>
                </p>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                            Forget your Password?
                        </a>
                    </div>
                </div>

                <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">

                        </span>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
        <button @click="login"></button>
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
            //let _this = this
            this.$axios
                .post('https://qc5wyz.fn.thelarkcloud.com/loginVerify',{
                    // loginForm:{
                    //     username: "admin",
                    //     password: "123456"
                    //}
                    username: this.loginForm.username,
                    password: this.loginForm.password
                    // params:{
                    //     username: this.loginForm.username,
                    //     //password: this.loginForm.password
                    // }
                    //get貌似只能传单�?
                })
                .catch((error) => {
                    console.log(error)
                })
                .then((successResponse) => {
                    console.log(successResponse);
                    if(successResponse.data.code === 200){
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
