<!-- components/ControlHeader.svelte -->
<script lang='ts'>
  import Button from '../BasicElements/Button.svelte';
    import RobotNavigation from './RobotNavigation.svelte';
  let robot_on : boolean = false;

  function onNavigate(x:number, y:number) {
    console.log('Done');
  }

  const turnRobot = () => {
   
    if (!robot_on) {
      console.log("robot_toggle on");
      fetch("http://localhost:8000/robot/start", { method: "POST" })
        .then(response => {
          // Handle response if needed
        })
        .catch(error => {
          console.error("Failed to send start request:", error);
        });
    } else {
      console.log("robot_toggle off");
      fetch("http://localhost:8000/robot/stop", { method: "POST" })
        .then(response => {
          // Handle response if needed
        })
        .catch(error => {
          console.error("Failed to send stop request:", error);
        });
    }
    robot_on = !robot_on; // Toggle the value of robot_on

  }
</script>
<style>
 .header {
  align-self: center;
 }
</style>
<h2 class="header">
  Welcome To Ahmed bin Majid Robot
</h2> 
<Button text={robot_on ? "Turn off" : "Turn on"} onClick={turnRobot} enabled={true}/>

<hr />  
{#if robot_on}
  <RobotNavigation {onNavigate}/>
{/if}