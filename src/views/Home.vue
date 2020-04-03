<template>
    <div class="container">
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
        <div class="footer">
            #staysafe | "Soliteradalahsolidaritas" | #dirumahaja<br>Powered by: <span class="tred"><b>@fazaio</b></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data: function() {
        return {
            confirmed: '0',
            recovered: '0',
            deaths: '0',
            lastupdate: '0',
            rest: ''
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
                vm.deaths	= response.data.deaths.value;
                vm.lastupdate = response.data.lastUpdatedAt;
                vm.rest = response.data.confirmed.value-response.data.recovered.value-response.data.deaths.value;
            }, function(error) {
                console.log(error.statusText);
            });
        }
    }
}
</script>