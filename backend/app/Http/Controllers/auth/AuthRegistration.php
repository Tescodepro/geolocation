<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\APIResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;

class AuthRegistration extends Controller
{

    function login(Request $request)
    {
        $request->validate([
            'password' => 'required',
            'email' => 'required|email',
        ]);

        try {
            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return APIResponse::error('Invalid credentials', 401);
            }

            $token = $user->createToken(uniqid(), ['user:member'])->plainTextToken;

            return APIResponse::success('Login successful', [
                'user' => $user,
                'token' => $token
            ]);
        } catch (Exception $exception) {
            return APIResponse::error("Something went wrong - {$exception->getMessage()}", 500);
        }
    }


    public function register(Request $request)
    {
        $request->validate([
            'phone' => 'required',
            'password' => 'required',
            'email' => 'required|email',
        ]);

        try {
            $user =  User::create([
                'name' => ucwords(strtolower($request->name)),
                'email' => strtolower($request->email),
                'password' => Hash::make($request->password)
            ]);

            $token = $user->createToken(uniqid(), ['car:driver'])->plainTextToken;

            $user = User::find($user->id);

            return APIResponse::success('Registration successful', [
                'user' => $user,
                'token' => $token
            ]);
        } catch (Exception $exception) {
            return APIResponse::error("Something went wrong - {$exception->getMessage()}", 500);
        }
    }
}
