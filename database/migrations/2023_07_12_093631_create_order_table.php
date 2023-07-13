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
        Schema::create('order', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('plan_id')->unsigned()->index()->nullable();
            $table->foreign('plan_id')->references('id')->on('plan')->onDelete('cascade');
            $table->string('deliveryperweek');
            $table->string('offday');
            $table->string('planduration');
            $table->string('mealtype');
            $table->bigInteger('users_id')->unsigned()->index()->nullable();
            $table->foreign('users_id')->references('id')->on('users');
            $table->date('startingdate');
            $table->string('city');
            $table->string('address');
            $table->string('appartment');
            $table->string('gmap');
            $table->string('instruction');
            $table->integer('price');
            $table->string('status');
            $table->string('payment_status');
            $table->string('payment_amount');
            $table->string('payment_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order');
    }
};
