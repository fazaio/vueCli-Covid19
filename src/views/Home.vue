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
                <linechart v-if="loaded" :linedata="chartdata" />
            </vue-glide-slide>
            <vue-glide-slide>
                <b>Bar chart</b><br>
                <span>• Grafik batang</span>
                <barchart v-if="loaded" :bardata="chartdata" />
            </vue-glide-slide>
            <vue-glide-slide>
                <b>Doughnut Chart</b><br>
                <span>• Grafik donat</span>
                <doughnut v-if="loaded" :doughnutdata="doughdata" />
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
import axios from 'axios'
import { Glide, GlideSlide } from 'vue-glide-js'
import linechart from '../components/lineChart.js'
import barchart from '../components/barChart.js'
import doughnut from '../components/doughnutChart.js'

export default {
    name: 'Home',
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide,
        linechart,
        barchart,
        doughnut
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
            },
            chartdata: '',
            doughdata: '',
            loaded: false
        }
    },
    created() {
        this.datalocal()
        this.getChart()
        console.log('msg')
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
        },
        getChart() {
            var vm = this;
            axios.get('https://pomber.github.io/covid19/timeseries.json').then(function(response) {
                var date = []
                var conf = []
                var deat = []
                var reco = []
                var data = response.data.Indonesia.slice(-14)
                for (var i = 0; i < data.length; i++) {
                    date.push(data[i].date)
                    conf.push(data[i].confirmed)
                    deat.push(data[i].deaths)
                    reco.push(data[i].recovered)
                }

                vm.chartdata = {
                    labels: date,
                    datasets: [{
                            label: 'Meninggal',
                            borderColor: 'rgb(220,53,69,0.7)',
                            backgroundColor: 'rgb(220,53,69,0.2)',
                            data: deat
                        },
                        {
                            label: 'Konfirmasi',
                            borderColor: 'rgb(0,184,148,0.7)',
                            backgroundColor: 'rgb(0,184,148, 0.2)',
                            data: conf
                        },
                        {
                            label: 'Sembuh',
                            borderColor: 'rgb(9, 132, 227, 0.7)',
                            backgroundColor: 'rgb(9, 132, 227, 0.2)',
                            data: reco
                        }
                    ]
                }

                vm.doughdata = {
                    datasets: [{
                        data: [10, 20, 30]
                    }],
                    labels: [
                        'Red',
                        'Yellow',
                        'Blue'
                    ]
                }
                console.log('msg')
                vm.loaded = true

            }, function(error) {
                console.log(error.statusText);
            })
        }
    }
}
</script>