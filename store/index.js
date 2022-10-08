
export const state = () => ({
    drivers: [],
    teams: []
})

export const getters = {
    getTeams: (state) => {
        return state.teams
    },
    getDrivers: (state) => {
        return state.drivers
    },
}

export const mutations = {
    setTeams: (state, payload) => {
        state.teams = payload
    },
    setDrivers: (state, payload) => {
        state.drivers = payload
    },
}

export const actions = {
}
