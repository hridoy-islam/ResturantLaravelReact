<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function signup(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|string|unique:users,email',
            'password' => 'required|confirmed',
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }


    public function login(Request $request){
        $validated = $request->validate([
            'email' => 'required|email|string|exists:users,email',
            'password' => 'required',
        ]);
        if(!Auth::attempt($validated)){
            return response([
                'message' => 'provided email or password incorrect'
            ]);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

    public function logout(Request $request)
    {

        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
