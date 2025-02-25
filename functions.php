
<?php
/**
 * EGOV-KALENDER Theme functions and definitions
 *
 * @package EGOV-KALENDER
 */

// Enqueue scripts and styles
function egov_kalender_scripts() {
    // Enqueue your React app's assets
    wp_enqueue_script('egov-kalender-react', get_template_directory_uri() . '/dist/assets/main.js', array(), '1.0.0', true);
    wp_enqueue_style('egov-kalender-styles', get_template_directory_uri() . '/dist/assets/main.css');

    // Add WordPress REST API nonce to window object
    wp_localize_script('egov-kalender-react', 'wpSettings', array(
        'apiUrl' => esc_url_raw(rest_url()),
        'nonce' => wp_create_nonce('wp_rest')
    ));
}
add_action('wp_enqueue_scripts', 'egov_kalender_scripts');

// Add theme support
function egov_kalender_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'egov_kalender_theme_support');

// Allow CORS for development
function egov_kalender_allow_cors() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Authorization, Content-Type");
}
add_action('init', 'egov_kalender_allow_cors');
?>
