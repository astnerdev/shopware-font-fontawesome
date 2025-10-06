# Shopware 6 Font Awesome Integration
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)


This Plugin integrates Font Awesome to Shopware 6 with Preloading.

## Install

Download the plugin from the release page and enable it in Shopware.

This version of the plugin is tested against Shopware **6.7.2.2** and
overrides the storefront meta template to preload the bundled Font Awesome
font files. After activating the plugin, run the storefront build
(`bin/console theme:compile`) so that the SCSS and fonts are available.

## Continuous integration

Every push and pull request triggers a GitHub Actions workflow that boots a
Dockware Shopware 6.7.2.2 environment, installs the plugin, and executes the
Shopware unit and storefront test suites via `vendor/bin/phpunit`. Locally you
can reproduce the workflow from within a Dockware container by running:

```
./vendor/bin/phpunit --configuration="custom/plugins/AstnerdevFontAwesome/phpunit.xml.dist"
./vendor/bin/phpunit --configuration="vendor/shopware/platform/src/Storefront/Test/phpunit.xml"
```

This ensures the plugin stays compatible with current Shopware releases and
continues to work with the storefront asset pipeline.

## Usage
```` html
<i class="fas fa-icons"></i>
```` 
