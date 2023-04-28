<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\MailController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');

Route::get('/dashboard', [RegisterController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');
Route::delete('/dashboard/{register}', [RegisterController::class, 'destroy'])
    ->middleware(['auth', 'verified'])
    ->name('contact.delete');

Route::get('/cadastrar', [RegisterController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('contact');
Route::post('/cadastrar', [RegisterController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('contact.new');

Route::get('/editar/{register}', [RegisterController::class, 'edit'])
    ->middleware(['auth', 'verified'])
    ->name('contact.edit');
Route::patch('/editar/{register}', [RegisterController::class, 'update'])
    ->middleware(['auth', 'verified'])
    ->name('contact.edit.save');

Route::middleware('auth')->group(function () {
    Route::get('/perfil', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/perfil', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/perfil', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('email/{register}', [MailController::class, 'index'])->name('email');

Route::fallback(function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');

require __DIR__.'/auth.php';
