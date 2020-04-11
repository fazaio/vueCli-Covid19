<template>
    <div class="isi">
        <b>Data Internasional:</b> <br><span>Virtualisasi data dari dampak penyebaran pandemik Coronavirus Disease (COVID-19) di berbagai negara, Data diambil dari: <a href="https://github.com/CSSEGISandData/COVID-19">CSSEGISandData</a> </span>
        <div class="search">
            <input v-model="fillCountry" style="width: 100%" type="text" placeholder="Cari negara">
        </div>
        <span><i><b>{{ fillCountry }}</b></i></span>
        <div class="center" v-if="loaded">
        	<div class="loader"></div><br>
        </div>
        <div id="global">
            <div class="single-card" style="margin-top: 40px;color: gray !important" v-for="(value,country) in filter">
                <div class="flx">
                    <div class="col"><b> {{ country }} </b></div>
                    <div class="col" style="text-align: right;font-size: 10px"><i>{{ value.slice(-1)[0].date }}</i></div>
                </div>
                <div class="total-flx">
                    <div class="tot">Confirmed
                        <span class="tblue">
                            {{ value.slice(-1)[0].confirmed }}</span>
                    </div>
                    <div class="tot">Death
                        <span class="tred">{{ value.slice(-1)[0].deaths }}</span>
                    </div>
                    <div class="tot">Recovered
                        <span class="tgreen">{{ value.slice(-1)[0].recovered }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'globe',
    data: function() {
        return {
            Global: '',
            loaded: true,
            fillCountry: ''
        }
    },
    created() {
        this.dataGlobe()
    },
    computed: {
        filter: function() {
            var data = this.Global;
            const allowed = this.fillCountry;
            if ('' !== allowed) {
                return Object.keys(data)
                    .filter(key => key.toLowerCase().includes(allowed.toLowerCase()))
                    .reduce((obj, key) => {
                        obj[key] = data[key];
                        return obj;
                    }, {});
            }
            return data
        }
    },
    methods: {
        dataGlobe() {
            var vm = this;
            axios.get('https://pomber.github.io/covid19/timeseries.json').then(function(response) {
                vm.Global = response.data
                vm.loaded = false

            }, function(error) {
                console.log(error.statusText);
            })
        }
    }
}
</script>