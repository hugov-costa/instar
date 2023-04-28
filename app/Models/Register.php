<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'category_id',
        'name', 
        'email', 
        'address', 
        'phone', 
        'mobile', 
        'city', 
        'state', 
        'picture', 
        'birthday', 
        'observations'
    ];

    public function category() {
        return $this->hasOne('App\Models\Category', 'id', 'category_id');
    }
}
