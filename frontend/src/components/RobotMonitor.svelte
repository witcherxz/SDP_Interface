<!-- RobotMonitor.svelte -->
<script>
  import MonitorItem from './MonitorItem.svelte';

  export let robotStatus = [];
  export let headerLabel = 'Robot Monitor';
</script>

<div class="robot-monitor">
  <h3 class="header">{headerLabel}</h3>
  {#each robotStatus as status (status.label)}
    <MonitorItem  label={status.label} value={status.value} />
  {/each}
</div>

<style>
  .header{
    text-align: center;
  }
</style>
