<template>
    <div class="containers">
        <vue-glide :type="typeglide" :breakpoints="breakpoin" :autoplay="5000">
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
                <div class="center" style="margin-top: 10px">
                    <span>Indonesia</span>
                </div>
                <div class="single-card" style="margin:50px 10px 0px 10px;">
                    <div style="padding: 10px;"><span class="tred">•</span>
                        <span> Data diatas merupakan jumlah dampak kasus penyebaran pandemik Coronavirus Disease (COVID-19) di <b>Indonesia</b> selama 14 hari terakhir. Sumber data tertera pada laman Info.</span>
                    </div>
                </div>
                <div class="single-card" style="margin:10px 10px;">
                    <div style="padding: 10px;"><span class="tred">•</span>
                        <span> Update : <br>{{lastupdate}}</span>
                    </div>
                </div>
            </vue-glide-slide>
            <vue-glide-slide>
                <b>Line chart</b><br>
                <span>• Grafik garis</span>
                <linechart v-if="loaded" :linedata="chartdata" />
                <div class="center" v-if="!loaded">
                    <div class="loader"></div><br>
                </div>
                <div class="center" style="margin-top: 10px">
                    <span>Indonesia</span>
                </div>
                <div class="single-card" style="margin:50px 10px 0px 10px;">
                    <div style="padding: 10px;"><span class="tred">•</span>
                        <span> Grafik garis diatas merupakan jumlah dampak kasus penyebaran pandemik Coronavirus Disease (COVID-19) di <b>Indonesia</b> selama 14 hari terakhir.</span>
                    </div>
                </div>
                <div class="single-card" style="margin:10px 10px;">
                    <div style="padding: 10px;"><span class="tred">•</span>
                        <span> Ketuk tulisan <i>'konfirmasi'</i> untuk menyembunyikan data konfirmasi dan melihat lebih jelas perbandingan antara meninggal & sembuh.</span>
                    </div>
                </div>
            </vue-glide-slide>
            <vue-glide-slide>
                <b>Doughnut Chart</b><br>
                <span>• Grafik donat</span>
                <doughnut v-if="loaded" :doughnutdata="doughdata" />
                <div class="center" v-if="!loaded">
                    <div class="loader"></div><br>
                </div>
                <div class="center" style="margin-top: 10px">
                    <span>Indonesia</span>
                </div>
                <div class="single-card" style="margin:50px 10px 0px 10px;">
                    <div style="padding: 10px;"><span class="tred">•</span>
                        <span> Grafik donat dampak kasus penyebaran pandemik Coronavirus Disease (COVID-19) di <b>Indonesia</b> selama 14 hari terakhir.</span>
                    </div>
                </div>
                <div class="single-card" style="margin:10px 10px;">
                    <div style="padding: 10px;"><span class="tred">•</span>
                        <span> Ketuk warna donat untuk melihat label data dan jumlah angka.</span>
                    </div>
                </div>
            </vue-glide-slide>
            <vue-glide-slide>
                <b>Bar chart</b><br>
                <span>• Grafik batang</span>
                <barchart v-if="loaded" :bardata="barchart" />
                <div class="center" v-if="!loaded">
                    <div class="loader"></div><br>
                </div>
                <div class="center" style="margin-top: 10px">
                    <span>Indonesia</span>
                </div>
                <div class="single-card" style="margin:50px 10px;">
                    <div style="padding: 10px;"><span class="tred">•</span>
                        <span> Grafik batang jumlah kasus baru tiap harinya dari dampak kasus penyebaran pandemik Coronavirus Disease (COVID-19) di <b>Indonesia</b> selama 14 hari terakhir.</span>
                    </div>
                </div>
            </vue-glide-slide>
            <vue-glide-slide>
                <b>Pie Chart</b><br>
                <span>• Grafik Lingkaran</span>
                <piechart v-if="loaded" :piedata="doughdata" />
                <div class="center" v-if="!loaded">
                    <div class="loader"></div><br>
                </div>
                <div class="center" style="margin-top: 10px">
                    <span>Indonesia</span>
                </div>
                <div class="single-card" style="margin:50px 10px;">
                    <div style="padding: 10px;"><span class="tred">•</span>
                        <span> Grafik lingkaran dampak kasus penyebaran pandemik Coronavirus Disease (COVID-19) di <b>Indonesia</b> selama 14 hari terakhir.</span>
                    </div>
                </div>
            </vue-glide-slide>
        </vue-glide>
        <div class="footer">
            #staysafe | "Soliteradalahsolidaritas" | #dirumahaja<br>Powered by: <span class="tred"><b>@fazaioo</b></span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Glide, GlideSlide } from 'vue-glide-js'
import linechart from '../components/lineChart.js'
import barchart from '../components/barChart.js'
import doughnut from '../components/doughnutChart.js'
import piechart from '../components/pieChart.js'

export default {
    name: 'Home',
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide,
        linechart,
        barchart,
        doughnut,
        piechart
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
            barchart: '',
            chartdata: '',
            doughdata: '',
            loaded: false,
            typeglide: 'carousel'
        }
    },
    created() {
        this.datalocal()
        this.getChart()
    },
    methods: {
        datalocal: function() {
            var vm = this;
            axios.get('https://covid19.mathdro.id/api/countries/ID').then(function(response) {
                vm.confirmed = response.data.confirmed.value;
                vm.recovered = response.data.recovered.value;
                vm.deaths = response.data.deaths.value;
                vm.lastupdate = response.data.lastUpdate;
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
                var bconf = []
                var bdeat = []
                var breco = []
                var data = response.data.Indonesia.slice(-14)
                var doughnut = response.data.Indonesia.slice(-1)

                var doughnutdat = []
                doughnutdat[2] = doughnut[0].confirmed
                doughnutdat[1] = doughnut[0].deaths
                doughnutdat[0] = doughnut[0].recovered

                for (var i = 0; i < data.length; i++) {
                    date.push(data[i].date)
                    conf.push(data[i].confirmed)
                    deat.push(data[i].deaths)
                    reco.push(data[i].recovered)

                    var z = 1 + i;
                    if (data[z] !== undefined) {
                        bconf.push(data[z].confirmed - data[i].confirmed)
                        bdeat.push(data[z].deaths - data[i].deaths)
                        breco.push(data[z].recovered - data[i].recovered)
                    }
                }

                vm.barchart = {
                    labels: date.slice(1),
                    datasets: [{
                            label: 'Meninggal',
                            borderColor: 'rgb(220,53,69,0.7)',
                            backgroundColor: 'rgb(220,53,69,0.2)',
                            data: bdeat,
                            borderWidth: 1
                        },
                        {
                            label: 'Konfirmasi',
                            borderColor: 'rgb(0,184,148,0.7)',
                            backgroundColor: 'rgb(0,184,148, 0.2)',
                            data: bconf,
                            borderWidth: 1
                        },
                        {
                            label: 'Sembuh',
                            borderColor: 'rgb(9, 132, 227, 0.7)',
                            backgroundColor: 'rgb(9, 132, 227, 0.2)',
                            data: breco,
                            borderWidth: 1
                        }
                    ]
                }
                vm.chartdata = {
                    labels: date,
                    datasets: [{
                            label: 'Meninggal',
                            borderColor: 'rgb(220,53,69,0.7)',
                            backgroundColor: 'rgb(220,53,69,0.2)',
                            data: deat,
                            borderWidth: 1
                        },
                        {
                            label: 'Konfirmasi',
                            borderColor: 'rgb(0,184,148,0.7)',
                            backgroundColor: 'rgb(0,184,148, 0.2)',
                            data: conf,
                            borderWidth: 1
                        },
                        {
                            label: 'Sembuh',
                            borderColor: 'rgb(9, 132, 227, 0.7)',
                            backgroundColor: 'rgb(9, 132, 227, 0.2)',
                            data: reco,
                            borderWidth: 1
                        }
                    ]
                }

                vm.doughdata = {
                    datasets: [{
                        data: doughnutdat,
                        backgroundColor: ['rgb(9, 132, 227, 0.2)', 'rgb(220,53,69,0.2)', 'rgb(0,184,148,0.2)'],
                        borderColor: ['rgb(9, 132, 227, 0.7)', 'rgb(220,53,69,0.7)', 'rgb(0,184,148,0.7)'],
                        borderWidth: 1
                    }],
                    labels: [
                        'Sembuh',
                        'Meninggal',
                        'konfirmasi'
                    ]
                }

                vm.loaded = true

            }, function(error) {
                console.log(error.statusText);
            })
        }
    }
}
</script>