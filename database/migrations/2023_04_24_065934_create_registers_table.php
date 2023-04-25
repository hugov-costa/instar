<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\RegisterDescription::class, 'description_id');
            $table->string('name', 150);
            $table->string('email', 150);
            $table->string('address', 150);
            $table->string('phone', 15);
            $table->string('mobile', 15);
            $table->string('city', 100);
            $table->char('state', 2);
            $table->string('picture', 150);
            $table->date('birthday');
            $table->text('observations');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registers');
    }
};
