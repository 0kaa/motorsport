<template>
  <div>
    <Loading v-if="isLoading" />
    <div
      class="relative flex flex-col items-center justify-center space-y-3 bg-white"
      v-if="$auth.loggedIn && !isLoading"
    >
      <div class="flex flex-row justify-between w-10/12 mx-auto my-8">
        <PageHeader
          class="w-full"
          :breadcrumbs="false"
          action="buttons"
          pageStyle="simple"
          :text="`Welcome back, ${$auth.user.name.split(' ')[0]}`"
          supportingText="Manage your actionflows, create new, and view your storage consumption and recent activities"
          :centered="false"
          :banner="false"
        >
          <template slot="buttons">
            <VisionFloButton
              text="New actionflow"
              type="leading"
              icon="Plus"
              strokeIcon
              color="primary"
              :to="'/actionflow/new'"
            />
          </template>
        </PageHeader>
      </div>
      <div class="flex flex-row justify-between w-10/12 gap-6">
        <div
          class="flex flex-col flex-1 space-y-3"
          v-if="flows && flows.length"
        >
          <nuxt-link
            v-for="flow in flows"
            :key="flow.PK"
            :to="'/actionflow/' + flow.PK.replace('FLOW#', '')"
          >
            <ActionflowCard
              :flow="flow"
              :home="true"
              :flowsNames="flows.map((f) => f.name)"
            />
          </nuxt-link>
        </div>
        <div
          v-else
          class="flex flex-col items-center justify-center flex-1 border border-gray-200 rounded-lg"
        >
          <div class="flex flex-col items-center justify-center w-88">
            <div class="flex flex-col items-center justify-center text-center">
              <IconNoActionFlows class="mb-6" />
              <h3 class="text-xl font-medium text-gray-900">
                Start by creating a new actionflow
              </h3>
              <p class="mt-2 mb-8 text-gray-500 text-md">
                Any actionflows you will create will live here.
                <br />Start creating your first actionflow.
              </p>
            </div>
            <VisionFloButton
              text="New actionflow"
              type="leading"
              icon="Plus"
              strokeIcon
              color="primary"
              class="w-full"
              :to="'/actionflow/new'"
            />
          </div>
        </div>
        <div
          class="sticky top-[100px] flex h-full w-[360px] flex-col space-y-5"
        >
          <RemainingFlows
            :userSubscription="userSubscription ? userSubscription : 0"
            :actionflowsLeft="actionflowsLeft"
          />
          <Consumption
            :isLoading="consumptionIsLoading"
            :min="0"
            :max="100"
            :value="consumptionValue ? consumptionValue : 0"
            :text="consumptionValue ? Math.floor(consumptionValue) : 0"
            :actionflowsLeft="actionflowsLeft"
            :storageConsumption="storageConsumption ? storageConsumption : 0"
            :userSubscription="userSubscription ? userSubscription : 0"
          />
          <RecentActivities :logs="logs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authentication',
  data() {
    return {
      flows: [],
      logs: [],
      // flows: [
      //   {
      //     flow_status: 'created',
      //     links: [],
      //     logger_interval: 5,
      //     stage: 'draft',
      //     pause_time: 0.0005,
      //     created_at: '2021-10-15T14:02:25.710492',
      //     image_version: '3.8.5',
      //     pub_status: 'private',
      //     condition_stacks: [],
      //     action_modules: [],
      //     python_version: '3.6',
      //     name: 'Adham',
      //     updated_at: '2021-10-15T14:02:25.710507',
      //     docker_template: 'dockerfile',
      //     break_on_exception: true,
      //     SK: 'USER#566dad34-d98c-4803-8acd-e223e00e1672',
      //     run_cycles: -1,
      //     logger_function_name: 'TestFunction',
      //     description: 'By Shibob',
      //     PK: 'FLOW#3nMVVwiSYjoW4n2eKlamXA',
      //     engine_version: 1.1,
      //     mage_base: 'python',
      //     interruptor: {
      //       output_index: null,
      //       value_to_compare: null,
      //       module: null,
      //       logical_op: 1,
      //     },
      //   },
      //   {
      //     flow_status: 'created',
      //     links: [],
      //     logger_interval: 5,
      //     stage: 'draft',
      //     pause_time: 0.0005,
      //     created_at: '2021-10-15T14:02:25.710492',
      //     image_version: '3.8.5',
      //     pub_status: 'private',
      //     condition_stacks: [],
      //     action_modules: [],
      //     python_version: '3.6',
      //     name: 'Adham',
      //     updated_at: '2021-10-15T14:02:25.710507',
      //     docker_template: 'dockerfile',
      //     break_on_exception: true,
      //     SK: 'USER#566dad34-d98c-4803-8acd-e223e00e1672',
      //     run_cycles: -1,
      //     logger_function_name: 'TestFunction',
      //     description: 'By Shibob',
      //     PK: 'FLOW#3nMVVklwiSYoW4n2eKlamXA',
      //     engine_version: 1.1,
      //     mage_base: 'python',
      //     interruptor: {
      //       output_index: null,
      //       value_to_compare: null,
      //       module: null,
      //       logical_op: 1,
      //     },
      //   },
      //   {
      //     flow_status: 'created',
      //     links: [],
      //     logger_interval: 5,
      //     stage: 'draft',
      //     pause_time: 0.0005,
      //     created_at: '2021-10-15T14:02:25.710492',
      //     image_version: '3.8.5',
      //     pub_status: 'private',
      //     condition_stacks: [],
      //     action_modules: [],
      //     python_version: '3.6',
      //     name: 'Adham',
      //     updated_at: '2021-10-15T14:02:25.710507',
      //     docker_template: 'dockerfile',
      //     break_on_exception: true,
      //     SK: 'USER#566dad34-d98c-4803-8acd-e223e00e1672',
      //     run_cycles: -1,
      //     logger_function_name: 'TestFunction',
      //     description: 'By Shibob',
      //     PK: 'FLOW#3nMVVwiSjkYoW4n2leKlamXA',
      //     engine_version: 1.1,
      //     mage_base: 'python',
      //     interruptor: {
      //       output_index: null,
      //       value_to_compare: null,
      //       module: null,
      //       logical_op: 1,
      //     },
      //   },
      // ],
      isLoading: true,
      consumptionIsLoading: true,
      userConsumption: '',
      userSubscription: '',
      consumptionValue: 0,
      storageConsumption: 0,
      actionflowsLeft: 0,
    }
  },
  async fetch() {
    await this.listFlows()
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 10000) {
      this.$fetch()
    }
  },
  methods: {
    async listFlows() {
      this.isLoading = true
      await this.getUserSubscription()
      const flows = await this.$api.flows.listUserFlows(true)
      const logs = await this.$api.users.ReadUserActionLog()
      this.flows = flows.data.data.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
      )
      this.logs = logs.data.data.events.sort(
        (a, b) => b.timestamp - a.timestamp
      )
      this.$nextTick(() => {
        var data = JSON.parse(this.$auth.user['tour-state-data'])
        if (data.static_tutorial === 'pending') {
          this.$vf.staticTutorialModal.open()
        }
        this.isLoading = false
      })
    },
    getUserSubscription() {
      this.$api.subscription
        .getSubscription(this.$auth.user.subscription)
        .then((res) => {
          console.log(`res.data.data`, res.data.data)

          this.userSubscription = res.data.data || res.data
        })
        .catch((err) => {
          console.log(`err`, err)
        })

      this.$api.users
        .getUserConsumption()
        .then((res) => {
          console.log(`res.data.data`, res.data.data)
          this.userConsumption = res.data.data || res.data
          this.actionflowsLeft =
            `${
              this.userSubscription.flow_limit -
              this.userConsumption.created_flow
            }` +
            ' / ' +
            `${this.userSubscription.flow_limit}`
          this.consumptionValue =
            (this.userConsumption.created_flow /
              this.userSubscription.flow_limit) *
            100
          this.storageConsumption =
            (this.userConsumption.storage_size /
              this.userSubscription.storage_limit) *
            100
          this.consumptionIsLoading = false
        })
        .catch((err) => {
          console.log(`err`, err)
        })
    },
  },
}
</script>
