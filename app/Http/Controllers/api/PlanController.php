<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    public function store(Request $request)
    {
        $plan = new Plan;
        $plan->name = $request->input('name');
        $plan->image = $request->file('image')->store('images');
        $plan->save();

        return response()->json([
            "success" => true,
            "message" => "Plan Added successfully.",
            "data" => $plan
        ]);
    }
}
