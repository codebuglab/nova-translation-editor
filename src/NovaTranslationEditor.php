<?php

namespace codebuglab\NovaTranslationEditor;

use Illuminate\View\View;
use Laravel\Nova\Nova;
use Laravel\Nova\Tool;

class NovaTranslationEditor extends Tool
{
    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    {
        Nova::script('translation-editor', __DIR__.'/../dist/js/tool.js');
    }

    /**
     * Build the view that renders the navigation links for the tool.
     *
     * @return View
     */
    public function renderNavigation()
    {
        return view('translation-editor::navigation');
    }
}
