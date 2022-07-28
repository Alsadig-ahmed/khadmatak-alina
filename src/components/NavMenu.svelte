<script>
  import Servce from './Servce.svelte'
	export let title = 'خدمتك علينا';

  let myLinks; 
    function myFunction() {
  console.log(myLinks);
  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
  }
}
</script>
<!-- Top Navigation Menu -->
<div class="topnav">
  <a href="/" class="active fs-2">{title}</a>
  <!-- Navigation links (hidden by default) -->
  <div bind:this={myLinks} id="myLinks">
    <a href="https:bit.ly/alina-app"  target="_blank" rel="noopener noreferrer">تنزيل التطبيق</a>
    <!-- <a href="mailto:abdos09670@gmail.com">ارسال رسالة للادارة</a> -->
    <a href="mailto:fkar.tgdme@gmail.com">ارسال رسالة للادارة</a>
    <a href="supervisor">المشرفين</a>
    <a href="about">معلومات عن التطبيق</a>
  </div>
  <a href="/" class="icon" on:click|preventDefault={myFunction}>
    <svg viewBox='0 0 10 8' width='40'>
      <path d='M1 1h8M1 4h 8M1 7h8' 
            stroke='#000' 
            stroke-width='2' 
            stroke-linecap='round'/>
    </svg>
  </a>
</div>
<style lang="scss">
    /* Style the navigation menu */
.topnav {
  overflow: hidden;
  background-color: #333;
  position: relative;
}

/* Hide the links inside the navigation menu (except for logo/home) */
.topnav #myLinks {
  display: none;
}

/* Style navigation menu links */
.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

/* Style the hamburger menu */
.topnav a.icon {
  background: rgb(0, 160, 70);
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}

/* Add a grey background color on mouse-over */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active link (or home/logo) */
.active {
  padding: 0.9rem;
  // background-color: #04AA6D;
  background-color: rgb(87, 255, 87);

  color: white;
}
.fs-2.fs-2{
  font-size: 2rem;
}
</style>