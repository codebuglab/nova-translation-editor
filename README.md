# Nova Translation Editor

This is a laravel nova package to manage/edit your translations. It depends on `spatie/laravel-translation-loader`.

![screenshot](https://raw.githubusercontent.com/codebuglab/translation-editor/master/docs/screenshot.png)

## Features

- Decide which translation group/file you want to make editable (`auth`, `validation`, etc.)
- Add new keys to the translation group
- Save all changes at once or only from current tab
- Multiple languages support
- Respects you own theme colors
- Filter the table by key or translation 

## Installation

### Install dependencies

First, make sure that you have installed and configured [spatie/laravel-translation-loader](https://github.com/spatie/laravel-translation-loader). 

### Installation

Install this package with composer and publish the config

```
composer require codebuglab/translation-editor
php artisan vendor:publish --provider="codebuglab\NovaTranslationEditor\ToolServiceProvider"
```

Add this nova tool to your NovaServiceProvider (`app/Providers/NovaServiceProvider.php`):

```php
public function tools()
{
    return [
        ...
        new \codebuglab\NovaTranslationEditor\NovaTranslationEditor()
    ];
}
```
### Configuration

Currently there are two configuration options:

```php
return [
    'groups' => [],
    'languages' => [
        'en'
    ]
];
```

##### groups

Here you can set which groups you want to show in the editor. You can add as many groups you want, for example `auth`, `validation` or even your own translation group. 

##### languages

Here you set, which languages you use. Default is `en`, but you can set other languages like `de` for german or `es` for spanish, etc.

## Filter

You can filter each tab by key AND any string in (any) translation:

![screenshot](https://raw.githubusercontent.com/codebuglab/translation-editor/master/docs/filter.gif)

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.
