<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EmmergencyContact;
use Exception;

class EmmergencyController extends Controller
{
    function viewEmmergency()
    {
        try {
           $emmergency_contact = EmmergencyContact::all();

            return APIResponse::success('successfully retrived emmergency contact', [
                'emmergency_contact' => $emmergency_contact
            ]);
        } catch (Exception $exception) {
            return APIResponse::error("Something went wrong - {$exception->getMessage()}", 500);
        }
    }
}
