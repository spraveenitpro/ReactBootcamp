<?php
add_action ('wp_enqueue_scripts', 'twentynineteen_styles');

function twentynineteen_styles() {

  $parent_style = 'twentynineteen-style';
  wp_enqueue_style($parent_style,get_template_directory_uri() . '/style.css'  );

  wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', [ $parent_style ],time() );
}

// Enqueue Theme JS w React Dependency
add_action( 'wp_enqueue_scripts', 'my_enqueue_theme_js' );
function my_enqueue_theme_js() {
  wp_enqueue_script(
    'my-theme-frontend',
    get_stylesheet_directory_uri() . '/build/index.js',
    ['wp-element'],
    time(), // Change this to null for production
    true
  );
}