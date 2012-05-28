<div id="<?php print $block_html_id; ?>" class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <h2<?php print $title_attributes; ?>><?php print l($title, 'node/5'); ?></h2>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <div class="content"><?php print $content; ?></div>

</div><!-- /.block -->
