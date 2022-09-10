export default (axios) => ({
  createFlow(payload) {
    return axios.post(`/api/flows`, payload)
  },
  listUserFlows() {
    return axios.get(`/api/flows?mine=true`)
  },
  listFlows(type) {
    if (type === 'publicFlows') {
      return axios.get(`/api/flows?is_public=true`)
    }
    if (type === 'publicMineFlows') {
      return axios.get(`/api/flows?mine=true&is_public=true`)
    }
  },
  // Rename to ReadFlow or ReadSingleFlow better
  listSigleFlow(id) {
    return axios.get(`/api/flows/${id}`)
  },
  updateSingleFlow(flowID, payload) {
    return axios.put(`/api/flows/${flowID}`, payload)
  },
  deleteSingleFlow(flowName) {
    return axios.delete(`/api/flows/${flowName}`)
  },
  createAssembler(flowID) {
    return axios.post(`/api/flows/${flowID}/assembler`)
  },
  getAssemblerJobs(flowID) {
    return axios.get(`/api/flows/${flowID}/assembler/jobs`)
  },
  getFlowBuild(flowID, buildID) {
    return axios.get(`/api/flows/${flowID}/builds/${buildID}/`)
  },
  getFlowBuildLogs(flowID, buildID) {
    return axios.get(`/api/flows/${flowID}/builds/${buildID}/logs`)
  },
  getFlowBuilds(flowID) {
    return axios.get(`/api/flows/${flowID}/builds`)
  },

  buildFlow(flowID) {
    return axios.post(`/api/flows/${flowID}/build`)
  },
  runFlow(flowID) {
    return axios.post(`/api/flows/${flowID}/run`)
  },
  listFlowRuns(flowID) {
    return axios.get(`/api/flows/${flowID}/runs`)
  },
  getFlowRun(flowID, runID) {
    return axios.get(`/api/flows/${flowID}/runs/${runID}/`)
  },
  getFlowRunLogs(flowID, runID) {
    return axios.get(`/api/flows/${flowID}/runs/${runID}/logs`)
  },
  stopRunningFlow(flowID, runID) {
    return axios.post(`/api/flows/${flowID}/runs/${runID}/stop`)
  },
})
