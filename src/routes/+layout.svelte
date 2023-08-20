<script>
  import "$lib/app.css";
  import Footer from "../lib/footer.svelte";
  import Header from "../lib/header.svelte";
</script>

<div class="xl:w-[1280px] mx-auto">
  <Header/>
  <slot></slot>
  <Footer />
</div>