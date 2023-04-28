<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRegisterRequest;
use App\Http\Requests\UpdateRegisterRequest;
use App\Models\Register;
use App\Models\Category;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $registers = Register::with('category')->get();

        return Inertia::render('Dashboard', ['registers' => $registers]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRegisterRequest $request)
    {
        $validate = $request->validate([
            'category_id' => 'required',
            'name' => 'required|max:150',
            'email' => 'required|unique:registers|max:150',
            'address' => 'required|max:150',
            'phone' => 'max:15',
            'mobile' => 'max:15',
            'city' => 'required|max:100',
            'state' => 'required|max:2',
            'picture' => 'max:60000',
            'birthday' => 'date',
            'observations' => 'max:150',
        ], [
            'email.unique' => 'O e-mail já está sendo utilizado.',
            'picture.max' => 'O arquivo deve ter até 40kb.'
        ]);

        $register = Register::create([
            'category_id' => $request->category_id,
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'phone' => $request->phone,
            'mobile' => $request->mobile,
            'city' => $request->city,
            'state' => $request->state,
            'picture' => $request->picture,
            'birthday' => $request->birthday,
            'observations' => $request->observations,
        ]);

        return redirect()->route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Register $register)
    {
        $categories = Category::all();

        return Inertia::render(
            'RegisterNew', 
            ['categories' => $categories]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Register $register)
    {
        $categories = Category::all();
        $registerId = Register::find($register->id);

        return Inertia::render(
            'RegisterEdit', 
            ['categories' => $categories, 
            'register' => $registerId]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRegisterRequest $request, Register $register)
    {
        $validate = $request->validate([
            'category_id' => 'required',
            'name' => 'required|max:150',
            'email' => 'required|max:150|unique:registers,email,'.$register->id,
            'address' => 'required|max:150',
            'phone' => 'max:15',
            'mobile' => 'max:15',
            'city' => 'required|max:100',
            'state' => 'required|max:2',
            'picture' => 'max:60000',
            'birthday' => 'date',
            'observations' => 'max:150',
        ], [
            'email.unique' => 'O e-mail já está sendo utilizado.',
            'picture.max' => 'O arquivo deve ter até 40kb.'
        ]);

        $registerId = Register::find($register->id)
            ->update([
                'category_id' => $request->category_id,
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
                'phone' => $request->phone,
                'mobile' => $request->mobile,
                'city' => $request->city,
                'state' => $request->state,
                'picture' => $request->picture,
                'birthday' => $request->birthday,
                'observations' => $request->observations,
            ]);

        return redirect()->route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Register $register)
    {
        $registerId = Register::find($register->id)->forceDelete();

        return redirect()->route('dashboard');
    }
}
