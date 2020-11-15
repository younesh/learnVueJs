<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <Header headerTitle="Server Status " />
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li class="list-group-item"
                            v-for="index in 5" :key="index">
                            <Server :serverIndex="index" />

                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <ServerDetail textDetail="Server Details are currently not updated" />
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <Footer footerContent="All Servers are managed here" />
            </div>
        </div>
    </div>
</template>

<script>
import Server from './components/Server.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ServerDetail from './components/ServerDetail.vue'
export default {
    name : "App",
    components : {
       Server, Header, Footer, ServerDetail
    }
}
</script>

<style scoped>
 
</style>
