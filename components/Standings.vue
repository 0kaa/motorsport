<template>
    <div>
        <div class="flex items-center justify-between bg-[#151515] py-3 rounded-tr-[4px] rounded-tl-[4px] px-5 gap-3">
            <button class="flex items-center gap-3 text-sm font-bold" :class="{
                'text-white': serie.id == selected,
                'text-[#ABABAB]': serie.id !== selected
            }" v-for="(serie,i) in series" :key="i" @click.prevent="select(serie)">
                <span v-text="serie.title"></span>
                <span class="text-red-500" v-if="i !== series.length - 1">/</span>
            </button>

        </div>
        <div class="bg-[#3A3A3A] px-5 pt-4 flex items-center justify-between">
            <button @click.prevent="tab = 'driver'" class="text-xs font-bold border-b-4" :class="{
                'border-white text-white': tab == 'driver',
                'text-[#ABABAB] border-black': tab !== 'driver'                
            }">
                VERSENYZŐK</button>
            <button @click.prevent="tab = 'team'" class="text-xs font-bold border-b-4" :class="{
                'border-white text-white': tab == 'team',
                'text-[#ABABAB] border-black': tab !== 'team'
            }">
                CSAPATOK</button>
        </div>
        <div class="relative">
            <table class="w-full text-xs text-left border border-[#DFDFDF]">
                <thead class="text-[10px] text-black uppercase border-b border-[#DFDFDF]">
                    <tr>
                        <th scope="col" class="px-1 py-3 font-normal">
                            Poz.
                        </th>
                        <th scope="col" class="px-6 py-3 font-normal">
                            Név
                        </th>
                        <th scope="col" class="px-1 py-3 font-normal">
                            Pont
                        </th>
                        <th scope="col" class="px-1 py-3 font-normal text-right">
                            Nemzetiség
                        </th>
                    </tr>
                </thead>

                <tbody v-if="tab == 'driver'">
                    <tr class="bg-white border-b border-[#DFDFDF]" v-for="(driver,i) in drivers" :key="i">
                        <th class="px-1 py-2 font-bold text-center text-black whitespace-nowrap"
                            v-text="driver.position" />
                        <td class="py-2 pl-0 pr-6" scope="row">
                            <div class="pl-4 border-l-4" :class="`border-[${driver.team.color}]`">
                                <div class="font-bold" v-text="driver.driver.title" />
                                <div class="font-medium text-[11px]" v-text="driver.team.title" />
                            </div>
                        </td>
                        <td class="px-1 py-2 font-medium text-center" v-text="driver.points" />
                        <td class="px-1 py-2 font-medium text-center" v-text="driver.nationality" />
                    </tr>
                </tbody>

                <tbody v-if="tab == 'team'">
                    <tr class="bg-white border-b border-[#DFDFDF]" v-for="(team,i) in teams" :key="i">
                        <th class="px-1 py-2 font-bold text-center text-black whitespace-nowrap"
                            v-text="team.position" />
                        <td class="py-3 pl-0 pr-6" scope="row">
                            <div class="pl-4 border-l-4" :class="`border-[${team.team.color}]`">
                                <div class="font-bold" v-text="team.team.title" />
                            </div>
                        </td>
                        <td class="px-1 py-2 font-medium text-center" v-text="team.points" />
                        <td class="px-1 py-2 font-medium text-center" v-text="team.nationality" />
                    </tr>
                </tbody>

                <tbody v-if="!drivers.length || !teams.length">
                    <tr class="bg-white border-b border-[#DFDFDF]">
                        <th class="px-1 py-2 font-bold text-center text-black whitespace-nowrap"
                            v-text="'No data found'" />
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Standings',
    data: () => ({
        selected: '',
        tab: 'driver',
    }),
    mounted() {
        this.selected = this.series[0].id
    },
    methods: {
        select(serie) {
            this.selected = serie.id
            this.$emit('selected', this.selected)
        }
    },
    props: {
        standings: {
            type: Object,
            default: () => ({})
        },
        series: {
            type: Array,
            default: () => ([])
        },
    },
    computed: {
        drivers() {
            return this.standings && this.standings.drivers ? this.standings.drivers.slice(0, 5) : []
        },
        teams() {
            return this.standings && this.standings.teams ? this.standings.teams.slice(0, 5) : []
        },
    }
}
</script>