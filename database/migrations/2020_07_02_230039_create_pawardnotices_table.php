<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePawardnoticesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pawardnotices', function (Blueprint $table) {
            $table->id();
            $table->integer('pnotice_id');
            $table->integer('company_id');
            $table->integer('currency_id');
            $table->integer('value');
            $table->string('status')->default('AWARDED');
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
        Schema::dropIfExists('pawardnotices');
    }
}
