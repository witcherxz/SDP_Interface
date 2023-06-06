<!-- MonitorItem.svelte -->
<script>
    export let label = '';
    export let value = '-';
  </script>
  
  <div class="monitor-item">
    <div class="label">{label}</div>
    <div class="value">{value}</div>
  </div>
  
  <style>
    .monitor-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1rem;
      margin: 1rem 0 0 0;
      border-radius: 0.5rem;
      background-color: #f2f2f2;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .label {
      font-weight: bold;
      color: #333;
      flex-basis: 30%;
    }
  
    .value {
      font-weight: normal;
      color: #666;
      flex-grow: 1;
      text-align: right;
    }
  </style>
  