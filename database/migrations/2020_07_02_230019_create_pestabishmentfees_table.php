<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePestabishmentfeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pestabishmentfees', function (Blueprint $table) {
            $table->id();
            $table->string('locality');
            $table->integer('currency_id');
            $table->integer('lower');
            $table->integer('upper');
            $table->integer('value');
            $table->integer('created_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pestabishmentfees');
    }
}
