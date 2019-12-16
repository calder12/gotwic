<script>
  export let segment;
</script>

<style>
  * {
    box-sizing: border-box;
  }

  .main-navigation {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin: 2em;
    margin-top: 1rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .menu {
    display: flex;
    flex-direction: column;
  }
  .menu li {
    display: block;
    list-style-type: none;
    text-transform: uppercase;
    width: 100%;
  }
  .menu li a {
    display: flex;
    text-align: center;
    text-decoration: none;
    color: #777;
    padding: 1rem;
  }
  .menu li a:hover {
    background: #666;
    color: #fff;
  }

  @media (min-width: 800px) {
    .menu {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .menu-item-has-children > a:after {
    content: "\2304";
		padding: 1px;
		margin-top: -15px;
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  nav ul ul {
    display: none;
  }

  @media (min-width: 800px) {
    nav ul ul {
      display: none;
      position: absolute;
    }
  }

  nav ul li:hover > ul {
    display: block;
    color: #fff;
    padding-left: 2rem;
  }

  @media (min-width: 800px) {
    nav ul li:hover > ul {
      padding-left: 0;
      background: #666;
      z-index: 999;
    }

    nav ul li:hover > ul a {
      color: #fff;
    }

    .sub-menu li:hover,
    .sub-menu li a:hover {
      background: #ddd;
      color: #777;
    }

    .sub-menu li {
      display: flex;
      padding-right: 2em;
    }

    nav ul ul ul {
      margin: 0 0 0 100%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
    }
  }
  .menu a.selected {
		background: #777;
		color: #fff;
  }
</style>

<nav class="main-navigation">
  <ul class="menu">
    <li>
      <a class:selected={segment === undefined} href=".">home</a>
    </li>
    <li>
      <a class:selected={segment === 'about'} href="about">about</a>
    </li>
    <li class="menu-item-has-children">
      <a class:selected={segment === 'research'} href="research">research</a>
      <ul class="sub-menu">
        <li>
          <a href="/research/calculator">research calculator</a>
        </li>
      </ul>
    </li>
    <li>
      <a class:selected={segment === 'commanders'} href="commanders">
        commanders
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>
    </li>
  </ul>
</nav>
