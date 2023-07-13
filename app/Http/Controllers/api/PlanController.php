<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|max:2048',
            'name' => 'required|unique:plan'
        ]);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = $file->getClientOriginalName();
            $finalName = date('his') . $filename;
            $request->file('image')->storeAs('images/', $finalName, 'public');
            $plan = new Plan;
            $plan->name = $request->name;
            $plan->image = $finalName;
            $plan->save();
            return response()->json([
                "success" => true,
                "message" => "Plan Added successfully.",
                "data" => $plan
            ]);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Please Upload File.",
            ]);
        }
    }
}
