<!-- Button.svelte -->
<script>
    export let text = 'Button';
    export let onClick = () => {
      console.log('====================================');
      console.log("Empty onClick handler");
      console.log('====================================');
    };
    export let enabled = true;
  </script>
  
  <button class="custom-button" on:click={onClick} disabled={!enabled}>{text}</button>
  
  <style>
    .custom-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.1s;
    width: 100%;
  }

  .custom-button:hover {
    background-color: #0056b3;
  }

  .custom-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .custom-button:active {
    transform: scale(0.95);
  }
  </style>
  