<?php

namespace App\Http\Controllers;

use App\Http\Requests\Menu\StoreRequest;
use App\Models\Menu;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class MenuController extends Controller
{
    public function index()
    {
        return response()->view('menu.index', [
            'menus' => Menu::orderBy('updated_at', 'desc')->get(),
        ]);
    }

    public function showAll(){
        $data = Menu::all();
        return response()->json($data, 200);
    }

    public function create()
    {
        return response()->view('menu.create');
    }

    public function store(StoreRequest $request) : RedirectResponse
    {
        $validated = $request->validated();

        if ($request->hasFile('menu_image')) {
            // put image in the public storage
            $filePath = Storage::disk('public')->put('images', request()->file('menu_image'));
            $validated['menu_image'] = $filePath;
        }

        // insert only requests that already validated in the StoreRequest
        $create = Menu::create($validated);

        if ($create) {
            // add flash for the success notification
            session()->flash('notif.success', 'Post created successfully!');
            return redirect()->route('menu.index');
        }

        return abort(500);
    }

    public function show(string $id): Response
    {
        return response()->view('menu.show', [
            'menu' => Menu::findOrFail($id),
        ]);
    }

    public function edit(string $id): Response
    {
        return response()->view('menu.edit', [
            'menu' => Menu::findOrFail($id),
        ]);
    }


    public function update(Request $request, string $id)
    {
        $menu = Menu::findOrFail($id);
        $validated = $request->validated();

        if ($request->hasFile('featured_image')) {
            // delete image
            Storage::disk('public')->delete($menu->menu_image);

            $filePath = Storage::disk('public')->put('images', request()->file('menu_image'), 'public');
            $validated['menu_image'] = $filePath;
        }

        $update = $menu->update($validated);

        if ($update) {
            session()->flash('notif.success', 'Post updated successfully!');
            return redirect()->route('posts.index');
        }

        return abort(500);
    }

    public function destroy(string $id)
    {
        $menu = Menu::findOrFail($id);

        Storage::disk('public')->delete($menu->menu_image);

        $delete = $menu->delete($id);

        if ($delete) {
            session()->flash('notif.success', 'Post deleted successfully!');
            return redirect()->route('posts.index');
        }

        return abort(500);
    }
}
