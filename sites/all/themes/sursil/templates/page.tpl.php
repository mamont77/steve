<noscript style="
color: red;
    left: 36%;
    position: absolute;
    top: 87px;
    width: 100%;
    "> Javascript must be enabled to properly navigate this site.
</noscript>
<div id="pageWrapper">
  <div id="page">

    <header id="header" class="clearfix" role="banner">
      <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo"><img
          src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/></a>
      <?php endif; ?>
      <?php print render($page['header']); ?>
    </header>

    <div id="main" class="clearfix">

      <div id="content" class="column" role="main">
        <?php print render($page['highlighted']); ?>
        <?php print $breadcrumb; ?>
        <a id="main-content"></a>
        <?php print render($title_prefix); ?>
        <?php if ($title): ?>
        <h1 class="title" id="page-title"><?php print $title; ?></h1>
        <?php endif; ?>
        <?php print render($title_suffix); ?>
        <?php print $messages; ?>
        <?php print render($tabs); ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
        <?php endif; ?>
        <?php print render($page['content']); ?>
        <?php print $feed_icons; ?>
      </div>
      <!-- /#content -->

      <div id="navigation" class="clearfix">

        <?php if ($main_menu): ?>
        <nav id="main-menu" role="navigation">
          <?php print theme('links__system_main_menu', array(
                                                            'links' => $main_menu,
                                                            'attributes' => array(
                                                              'class' => array('links', 'inline', 'clearfix'),
                                                            ),
                                                            'heading' => array(
                                                              'text' => t('Main menu'),
                                                              'level' => 'h2',
                                                              'class' => array('element-invisible'),
                                                            ),
                                                       )); ?>
        </nav>
        <?php endif; ?>

        <?php print render($page['navigation']); ?>

      </div>
      <!-- /#navigation -->

      <?php
            // Render the sidebars to see if there's anything in them.
      $sidebar_second = render($page['sidebar_second']);
      ?>

      <?php if ($sidebar_second): ?>
      <aside class="sidebars">
        <?php print $sidebar_second; ?>
      </aside><!-- /.sidebars -->
      <?php endif; ?>
      <?php print render($page['after_content']); ?>
    </div>
    <!-- /#main -->

    <?php print render($page['footer']); ?>

  </div>
  <!-- /#page -->
</div>
<!-- /#pageWrapper -->
<?php print render($page['bottom']); ?>
