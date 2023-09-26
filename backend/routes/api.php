<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\auth\AuthRegistration;
use App\Http\Controllers\EmmergencyController;
use App\Http\Controllers\ContactController;

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

Route::controller(AuthRegistration::class)->group(function () {
    Route::post('register', 'register')->name('register');
    Route::post('login', 'login')->name('login');
});
Route::middleware('auth:sanctum')->group(function () {
    Route::get('viewEmergency', [EmmergencyController::class, 'viewEmergency']);
    Route::controller(ContactController::class)->group(function () {
        Route::post('add_contact', 'addContact');
        Route::get('view_contact', 'viewContact');
    });
});
