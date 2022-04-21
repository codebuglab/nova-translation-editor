<?php

namespace codebuglab\NovaTranslationEditor;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class ToolServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $event) {
            $this->loadViewsFrom(__DIR__.'/../resources/views', 'nova-translation-editor');
        });

        $this->publishes([
            __DIR__.'/../config/nova-translation-editor.php' => config_path('nova-translation-editor.php'),
        ]);
    }

    /**
     * Register the tool's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware([
            'nova',
            //Authorize::class,
        ])->prefix('nova-vendor/nova-translation-editor')->group(function () {
            Route::get('/index', [NovaTranslationEditorController::class, 'index']);
            Route::post('/save', [NovaTranslationEditorController::class, 'save']);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__.'/../config/nova-translation-editor.php', 'nova-translation-editor');
    }
}
