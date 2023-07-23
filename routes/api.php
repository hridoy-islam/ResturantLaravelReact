<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\PostsController;
use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\api\PlanController;
use App\Http\Controllers\MenuController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/plan', [PlanController::class, 'store']);

    // Route::apiResource('/users', UserController::class);
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/signup', [AuthController::class, 'signup']);
Route::get('category', [CategoryController::class, 'index']);
Route::get('/category/:id', [CategoryController::class, 'show']);
Route::post('category', [CategoryController::class, 'store']);

Route::post('/post', [PostsController::class, 'store']);
Route::get('/menu', [MenuController::class, 'showAll']);
Route::post('/menu', [MenuController::class, 'store']);
