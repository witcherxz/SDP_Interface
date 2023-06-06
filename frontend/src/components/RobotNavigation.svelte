<!-- RobotNavigation.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import Button from '../BasicElements/Button.svelte';

  export let onNavigate: (x: number, y: number) => void;

  let xPosition: string = undefined;
  let yPosition: string = undefined;
  let xError = true;
  let yError = true;
  const handleNavigate = () => {
    const x = Number(xPosition);
    const y = Number(yPosition);
    
    
    if (!isNaN(x) && !isNaN(y)) {
      onNavigate(x, y);

      // Create the JSON body
      const body = JSON.stringify({
        "x": x,
        "y": y
      });
      console.log('====================================');
    console.log("BODY", body);
    console.log('====================================');
      // Send the HTTP request
      fetch('http://localhost:8000/nav', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    }
  }

  function handleXInput() {
    // xError = isValidNumber(xPosition) || xPosition == '';
    // if(!xError) $alert = `Invalid Input x`;
  }

  function handleYInput() {
  }

  function isValidNumber(value: string): boolean {
    return /^\d+$/.test(value);
  }

  onMount(() => {
    // handleXInput();
    // handleYInput();
  });
</script>
  <!-- {#if (!xError || !yError)}
    <Alert/>
  {/if} -->
  <h3 class="header">{"Navigation"}</h3>
  <div class="robot-navigation">
    <div class="input-wrapper">
      <input
        class="input"
        id="x-input"
        type="number"
        placeholder="Enter X Position"
        bind:value={xPosition}
        on:input={handleXInput}
        inputmode="numeric"
      />
    </div>
    <div class="input-wrapper">
      <input
        class="input"
        id="y-input"
        type="number"
        placeholder="Enter Y Position"
        bind:value={yPosition}
        on:input={handleYInput}
        inputmode="numeric"
      />
    </div>
    <Button text="Go to goal" onClick={handleNavigate} enabled={(xPosition !== undefined && yPosition !== undefined)}/>
  </div>
  
  <style>
    .header{
    text-align: center;
  }
    .robot-navigation {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
    }
  
    .input-wrapper {
      display: flex;
      width: 100%;
      flex-direction: row;
      position: relative;
    }
  
    .label {
      margin-bottom: 0.2rem;
      font-weight: 500;
    }
  
    .input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.3rem;
      font-size: 1rem;
      color: #333;
      width: 100%;
    }
  
    .error {
      margin-top: 0.3rem;
      color: red;
      font-size: 0.875rem;
    }
  
    .button {
      margin-top: 1rem;
      align-self: flex-end;
    }
  </style>
  