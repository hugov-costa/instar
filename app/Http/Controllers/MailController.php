<?php

namespace App\Http\Controllers;

use Mail;
use App\Mail\InstarMail;
use App\Models\Register;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MailController extends Controller
{
    public function index(Register $register)
    {
        $mailData = [
            'title' => 'Seja bem-vindo!',
            'body' => 'Este é o teste de e-mail deste que vos fala.'
        ];

        $registerId = Register::find($register->id);
         
        Mail::to($registerId->email)->send(new InstarMail($mailData));

        return redirect()->route('dashboard');
    }
}
