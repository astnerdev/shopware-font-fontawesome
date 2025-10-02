# Shopware 6 Font Awesome Integration
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)


This Plugin integrates Font Awesome to Shopware 6 with Preloading.

## Install

Download the plugin from the release page and enable it in Shopware.

This version of the plugin is tested against Shopware **6.7.2.2** and
overrides the storefront meta template to preload the bundled Font Awesome
font files. After activating the plugin, run the storefront build
(`bin/console theme:compile`) so that the SCSS and fonts are available.

## Usage
```` html
<i class="fas fa-icons"></i>
```` 
