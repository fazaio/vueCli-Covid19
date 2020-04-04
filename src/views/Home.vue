<template>
    <div class="containers">
        <vue-glide :breakpoints="breakpoin" :autoplay="2000">
            <vue-glide-slide>
                <div class="isi">
                    <div class="center"><b>Jumlah Kasus:</b></div>
                    <div class="flx">
                        <div class="col center">
                            <div style="font-size: 30px;padding: 15px;">{{ confirmed }}</div>
                            <span class="tgreen">•</span> <span>Konfirmasi</span>
                        </div>
                        <div class="col center">
                            <div style="font-size: 30px;padding: 15px;"> {{ rest }}</div>
                            <span class="tyellow">• </span><span>Dalam perawatan</span>
                        </div>
                    </div>
                    <div class="flx">
                        <div class="col center">
                            <div style="font-size: 30px;padding: 15px;">{{ recovered }}</div>
                            <span class="tblue">•</span> <span>Sembuh</span>
                        </div>
                        <div class="col center">
                            <div style="font-size: 30px;padding: 15px;">{{ deaths }}</div>
                            <span class="tred">•</span> <span>Meninggal</span>
                        </div>
                    </div>
                </div>
            </vue-glide-slide>
            <vue-glide-slide>
                <b>Line chart</b><br>
                <span>• Grafik garis</span>
            </vue-glide-slide>
            <vue-glide-slide>
                <b>Bar chart</b><br>
                <span>• Grafik batang</span>
            </vue-glide-slide>
            <vue-glide-slide>
                <b>Doughnut Chart</b><br>
                <span>• Grafik donat</span>
            </vue-glide-slide>
            <vue-glide-slide>
                <b>Pie Chart</b><br>
                <span>• Grafik Lingkaran</span>
            </vue-glide-slide>
        </vue-glide>
        <div class="footer">
            #staysafe | "Soliteradalahsolidaritas" | #dirumahaja<br>Powered by: <span class="tred"><b>@fazaio</b></span>
        </div>
    </div>
</template>
<script>
import { Glide, GlideSlide } from 'vue-glide-js'

export default {
    name: 'Home',
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide
    },
    data: function() {
        return {
            confirmed: '0',
            recovered: '0',
            deaths: '0',
            lastupdate: '0',
            rest: '',
            breakpoin: {
                1024: {
                    perView: 1
                },
                600: {
                    perView: 1
                }
            }
        }
    },
    created() {
        this.datalocal()
    },
    methods: {
        datalocal: function() {
            var vm = this;
            axios.get('https://covid19.mathdro.id/api/countries/ID').then(function(response) {
                vm.confirmed = response.data.confirmed.value;
                vm.recovered = response.data.recovered.value;
                vm.deaths = response.data.deaths.value;
                vm.lastupdate = response.data.lastUpdatedAt;
                vm.rest = response.data.confirmed.value - response.data.recovered.value - response.data.deaths.value;
            }, function(error) {
                console.log(error.statusText);
            });
        }
    }
}
</script>