<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    function addContact(Request $request)
    {
        $user_id = auth()->user()->id;
        $request->validate([
            'name' => 'required',
            'phone' => 'required|numeric|digits:11',
        ]);
        try {
            $contact =  Contact::create([
                'name' => $request->name,
                'phone_no' => $request->phone,
                'user_id' => $user_id,
            ]);
            return APIResponse::success('Contact successfully saved', [
                'contacts' => $contact
            ]);
        } catch (Exception $exception) {
            return APIResponse::error("Something went wrong - {$exception->getMessage()}", 500);
        }
    }

    function viewContact()
    {
        $user_id = auth()->user()->id;
        try {
            $contacts = Contact::where('user_id', $user_id)->get();
            return APIResponse::success('contact succesfully retrived', [
                'contacts' => $contacts
            ]);
        } catch (Exception $exception) {
            return APIResponse::error("Something went wrong - {$exception->getMessage()}", 500);
        }
    }
}
