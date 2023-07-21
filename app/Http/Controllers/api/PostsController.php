<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Posts::all();
        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('post.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $data = $request->validate([

        // ])
        // // $posts = new Posts;
        // // $posts->name = $request->title;
        // // $posts->description = $request->description;
        // // $posts->thumbnail = $request->thumbnail;
        // // $posts->category_id = $request->category_id;
        // // $posts->save();

        // return response()->json([
        //     'sccuess' => true,
        //     'message' => 'Post Added Successfully',
        //     'data' => $posts,
        // ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Posts $posts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Posts $posts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Posts $posts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Posts $posts)
    {
        //
    }
}
