<!-- components/ControlPanel.svelte -->
<script lang='ts'>

  import ControlHeader from './ControlHeader.svelte'

</script>
<style>
    .stack-large > * + * {
    margin-top: 2.5rem;
  }
  @media screen and (min-width: 550px) {
    .stack-small > * + * {
      margin-top: 1.4rem;
    }
    .stack-large > * + * {
      margin-top: 2.8rem;
    }
  }
  .todoapp {
    background: #fff;
    margin: auto; /* Center horizontally */
    margin-top: 10%;;
    padding: 1rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
    flex-basis: 200%;
    /* height: 100vh; Use viewport height */
    width: 50%;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center vertically */
  }
  @media screen and (min-width: 550px) {
    .todoapp {
      padding: 4rem;
    }
  }
  .todoapp > * {
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
    /* left: */
  }
  .todoapp > form {
    max-width: 100%;
  }
  .todoapp > h1 {
    display: block;
    max-width: 100%;
    text-align: center;
    margin: 0;
    margin-bottom: 1rem;
  }
  
</style>

<div class="todoapp stack-large">

  <!-- ControlHeader -->
  <ControlHeader/>
  <!-- <hr />   -->
  <!-- <RobotMonitor {robotStatus} /> -->

</div>
